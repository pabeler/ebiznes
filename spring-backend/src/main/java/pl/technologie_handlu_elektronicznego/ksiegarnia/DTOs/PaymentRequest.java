package pl.technologie_handlu_elektronicznego.ksiegarnia.DTOs;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.OrderDetail;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PaymentRequest {
    private Long amount;
}
