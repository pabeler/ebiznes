package pl.technologie_handlu_elektronicznego.ksiegarnia.DTOs;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderItemDTO {
    private BookDTO book;
    private Integer quantity;
}
