package pl.technologie_handlu_elektronicznego.ksiegarnia.DTOs;

import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class OrderDTO {
    private UserDTO user;
    private LocalDateTime created_at;
    private LocalDateTime updated_at;
    private String destination_address;
    private String status;
    private List<OrderItemDTO> items;

    // Getters and setters
}
