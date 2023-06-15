package pl.technologie_handlu_elektronicznego.ksiegarnia.controller;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.stripe.model.Price;
import com.stripe.model.checkout.Session;
import com.stripe.param.PaymentIntentCreateParams;
import com.stripe.param.PriceCreateParams;
import com.stripe.param.checkout.SessionCreateParams;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.technologie_handlu_elektronicznego.ksiegarnia.DTOs.OrderDTO;
import pl.technologie_handlu_elektronicznego.ksiegarnia.DTOs.OrderItemDTO;
import pl.technologie_handlu_elektronicznego.ksiegarnia.DTOs.PaymentRequest;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.Order;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.OrderDetail;
import pl.technologie_handlu_elektronicznego.ksiegarnia.service.BookService;

import java.util.*;

@RestController
@RequestMapping("/api/v1/checkout")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class CheckoutController {
    private final BookService bookService;
    static {
        Stripe.apiKey = "sk_test_51NJ02BA92ElYRt2EteOCjqoJ3RTbdHuIuh6sxakkv2P2deTjEPRaHl8quntaLmHzL031kGgYKAYLVsIUZ0zbmzqO00M4Y2Pzz6";
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
}

