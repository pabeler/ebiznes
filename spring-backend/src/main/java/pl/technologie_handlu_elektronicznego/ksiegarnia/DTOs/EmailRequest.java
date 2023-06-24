package pl.technologie_handlu_elektronicznego.ksiegarnia.DTOs;

import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class EmailRequest {
    private String name;
    private String email;
    private String phone;
    private String message;
}
