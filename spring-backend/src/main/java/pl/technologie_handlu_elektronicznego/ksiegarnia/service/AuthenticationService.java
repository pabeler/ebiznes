package pl.technologie_handlu_elektronicznego.ksiegarnia.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import pl.technologie_handlu_elektronicznego.ksiegarnia.DTOs.RegisterRequest;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.Role;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.User;
import pl.technologie_handlu_elektronicznego.ksiegarnia.repository.UserRepository;
import pl.technologie_handlu_elektronicznego.ksiegarnia.security.config.AuthenticationRequest;
import pl.technologie_handlu_elektronicznego.ksiegarnia.security.config.AuthenticationResponse;
import pl.technologie_handlu_elektronicznego.ksiegarnia.security.config.JwtService;
import pl.technologie_handlu_elektronicznego.ksiegarnia.token.Token;
import pl.technologie_handlu_elektronicznego.ksiegarnia.token.TokenRepository;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository userRepository;
    private final TokenRepository tokenRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    private void saveRefreshToken(String token, User user) {
        Token refreshToken = new Token();
        refreshToken.setToken(token);
        refreshToken.setUser(user);
        refreshToken.setExpirationDate(jwtService.extractExpiration(token));
        tokenRepository.save(refreshToken);
    }

    public ResponseEntity<?> register(RegisterRequest request) {
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new RuntimeException("Email already in use");
        }
        var user = User.builder()
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.CLIENT)
                .build();
        userRepository.save(user);

        return ResponseEntity.ok(user);
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            user.getEmail(),
                            request.getPassword()
                    )
            );
        } catch (BadCredentialsException e) {
            log.error("Invalid credentials", e);
            throw new RuntimeException("Invalid credentials");
        }
        if (!passwordEncoder.matches(request.getPassword(), user.getPassword()))
            throw new RuntimeException("Invalid password");

        Map<String, Object> additionalClaims = new HashMap<>();

        additionalClaims.put("role", user.getRole().toString());
        additionalClaims.put("user_id", user.getId().toString());

        var jwtToken = jwtService.generateStandardToken(additionalClaims, user);
        var refreshToken = jwtService.generateRefreshToken(user);
        saveRefreshToken(refreshToken, user);  // save refresh token
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .refreshToken(refreshToken)
                .build();
    }


    public AuthenticationResponse refreshToken(String oldRefreshToken) {
        var oldTokenOptional = tokenRepository.findByToken(oldRefreshToken);
        if (oldTokenOptional.isEmpty() || jwtService.isTokenExpired(oldRefreshToken)) {
            throw new RuntimeException("Invalid or expired refresh token");
        }
        var oldToken = oldTokenOptional.get();
        if (oldToken.isRevoked()) {
            throw new RuntimeException("Invalid refresh token");
        }
        tokenRepository.deleteById(oldToken.getId());
        var user = oldToken.getUser();
        Map<String, Object> additionalClaims = new HashMap<>();
        additionalClaims.put("role", user.getRole().toString());
        additionalClaims.put("user_id", user.getId().toString());
        var newAccessToken = jwtService.generateStandardToken(additionalClaims, user);
        var newRefreshToken = jwtService.generateRefreshToken(user);
        saveRefreshToken(newRefreshToken, user);


        var refreshToken = jwtService.generateRefreshToken(user);
        tokenRepository.save(oldToken);  // revoke old refresh token
        saveRefreshToken(refreshToken, user);  // save new refresh token
        return AuthenticationResponse.builder()
                .token(newAccessToken)
                .refreshToken(refreshToken)
                .build();
    }

}
