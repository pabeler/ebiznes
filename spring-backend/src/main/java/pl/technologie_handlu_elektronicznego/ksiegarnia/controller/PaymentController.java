package pl.technologie_handlu_elektronicznego.ksiegarnia.controller;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.technologie_handlu_elektronicznego.ksiegarnia.DTOs.PaymentRequest;

@RestController
@RequestMapping("/api/v1/payments")
public class PaymentController {

    @Value("${stripe.api.key}")
    private String stripeApiKey;

    @PostMapping("/create-payment-intent")
    public ResponseEntity<?> createPaymentIntent(@RequestBody PaymentRequest paymentRequest) {
        Stripe.apiKey = stripeApiKey;

        PaymentIntentCreateParams params = PaymentIntentCreateParams.builder()
                .setAmount(paymentRequest.getAmount()) // Kwota w najmniejszej jednostce waluty, np. centach dla USD
                .setCurrency("pln") // Ustaw walutę
                .addPaymentMethodType("card") // Ustaw metodę płatności
                .addPaymentMethodType("p24") // Ustaw metodę płatności
                .addPaymentMethodType("blik") // Ustaw metodę płatności
                .build();

        try {
            PaymentIntent paymentIntent = PaymentIntent.create(params);
            return ResponseEntity.ok(paymentIntent.getClientSecret());
        } catch (StripeException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error creating payment intent: " + e.getMessage());
        }
    }
}
