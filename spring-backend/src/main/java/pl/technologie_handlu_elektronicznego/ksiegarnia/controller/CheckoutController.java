package pl.technologie_handlu_elektronicznego.ksiegarnia.controller;

import com.stripe.Stripe;
import com.stripe.model.*;
import com.stripe.model.checkout.Session;
import com.stripe.exception.StripeException;
import com.stripe.net.Webhook;
import com.stripe.param.PriceCreateParams;
import com.stripe.param.checkout.SessionCreateParams;
import lombok.AllArgsConstructor;
import pl.technologie_handlu_elektronicznego.ksiegarnia.DTOs.OrderDTO;
import pl.technologie_handlu_elektronicznego.ksiegarnia.DTOs.OrderItemDTO;
import pl.technologie_handlu_elektronicznego.ksiegarnia.service.BookService;
import pl.technologie_handlu_elektronicznego.ksiegarnia.service.OrderService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.stripe.model.Event;
import com.stripe.model.checkout.Session;
import com.stripe.exception.StripeException;
import com.stripe.net.Webhook;
import pl.technologie_handlu_elektronicznego.ksiegarnia.service.OrderService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

import java.io.IOException;
import java.util.*;

@RestController
@RequestMapping("/api/v1/checkout")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class CheckoutController {
    private final BookService bookService;
    private final OrderService orderService;
    static {
        Stripe.apiKey = "sk_test_51"; //fake api key
    }

    @PostMapping("/create-checkout-session")
    public ResponseEntity<Map<String, String>> createCheckoutSession(@RequestBody OrderDTO orderDTO) throws StripeException {
        List<SessionCreateParams.LineItem> lineItems = new ArrayList<>();

        for (OrderItemDTO item : orderDTO.getItems()) {
            String priceId = createPriceInStripe(item.getBook().getPrice(), bookService.getBookById(item.getBook().getId()).getTitle());
            lineItems.add(
                    SessionCreateParams.LineItem.builder()
                            .setQuantity(item.getQuantity().longValue())
                            .setPrice(priceId)
                            .build()
            );
        }

        SessionCreateParams params =
                SessionCreateParams.builder()
                        .setSuccessUrl("http://localhost:3000/")
                        .setCancelUrl("http://localhost:3000/")
                        .setMode(SessionCreateParams.Mode.PAYMENT)
                        .addAllLineItem(lineItems)
                        .setShippingAddressCollection(
                                SessionCreateParams.ShippingAddressCollection.builder()
                                        .addAllowedCountry(SessionCreateParams.ShippingAddressCollection.AllowedCountry.PL) // tutaj wprowadź listę kodów krajów, do których chcesz zezwolić na dostawę
                                        .build()
                        )
                        .build();

        Session session = Session.create(params);
        Map<String, String> responseData = new HashMap<>();
        responseData.put("id", session.getId());

        return ResponseEntity.ok(responseData);
    }





    public String createPriceInStripe(Float price, String name) throws StripeException {
        PriceCreateParams params = PriceCreateParams.builder()
                .setCurrency("pln")
                .setProductData(
                        PriceCreateParams.ProductData.builder()
                                .setName(name)
                                .build())
                .setUnitAmount(price.longValue())
                .build();

        Price stripePrice = Price.create(params);
        return stripePrice.getId();
    }

    @PostMapping("/webhook")
    public ResponseEntity<String> handleStripeWebhook(HttpServletRequest request) throws IOException {
        String payload = request.getReader().lines().reduce("", (accumulator, actual) -> accumulator + actual);
        String sigHeader = request.getHeader("Stripe-Signature");
        Event event;

        try {
            event = Webhook.constructEvent(payload, sigHeader, Stripe.apiKey);
        } catch (StripeException e) {
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }

        if (event.getType().equals("checkout.session.completed")) {
            EventDataObjectDeserializer dataObjectDeserializer = event.getDataObjectDeserializer();
            if (dataObjectDeserializer.getObject().isPresent()) {
                Session session = (Session) dataObjectDeserializer.getObject().get();

                String orderId = session.getClientReferenceId();

                ShippingDetails shippingDetails = session.getShippingDetails();
                if (shippingDetails != null) {
                    Address address = shippingDetails.getAddress();
                    if (address != null) {
                        String line1 = address.getLine1();
                        try {
                            orderService.updateOrderAddress(orderId, line1);
                        } catch (Exception e) {
                            return ResponseEntity.status(500).body("Error updating order: " + e.getMessage());
                        }
                    }
                }
            }

        }

        return ResponseEntity.ok().body("Received");
    }

}

