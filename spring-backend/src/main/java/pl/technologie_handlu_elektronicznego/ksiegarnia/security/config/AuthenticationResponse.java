package pl.technologie_handlu_elektronicznego.ksiegarnia.security.config;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {
    private String token;
    private Integer id;
    private String refreshToken; // dodane pole
}
