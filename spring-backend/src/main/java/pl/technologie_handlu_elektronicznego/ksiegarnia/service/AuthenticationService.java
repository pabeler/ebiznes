package pl.technologie_handlu_elektronicznego.ksiegarnia.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
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
import pl.technologie_handlu_elektronicznego.ksiegarnia.token.TokenType;

@Slf4j
@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository repository;
    private final TokenRepository tokenRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {
        var user = User.builder()
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.CLIENT)
                .build();
        repository.save(user);
        var jwtToken = jwtService.generateToken(user);
        var refreshToken = jwtService.generateRefreshToken(user);
        saveRefreshToken(refreshToken, user);  // save refresh token
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .refreshToken(refreshToken)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(),
                            request.getPassword()
                    )
            );
        } catch (Exception e) {
            log.info(e.getMessage());
        }
        var user = repository.findByEmail(request.getEmail())
                .orElseThrow();
        if (!passwordEncoder.matches(request.getPassword(), user.getPassword()))
            throw new RuntimeException("Invalid password");
        var jwtToken = jwtService.generateToken(user);
        var refreshToken = jwtService.generateRefreshToken(user);
        saveRefreshToken(refreshToken, user);  // save refresh token
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .refreshToken(refreshToken)
                .id(user.getId())
                .build();
    }

    private void saveRefreshToken(String token, User user) {
        Token refreshToken = new Token();
        refreshToken.setToken(token);
        refreshToken.setUser(user);
        refreshToken.setTokenType(TokenType.REFRESH);
        tokenRepository.save(refreshToken);
    }
    public AuthenticationResponse refreshToken(String oldRefreshToken) {
        var oldTokenOptional = tokenRepository.findByToken(oldRefreshToken);
        if (oldTokenOptional.isEmpty()) {
            throw new RuntimeException("Invalid refresh token");
        }
        var oldToken = oldTokenOptional.get();
        if (oldToken.isExpired() || oldToken.isRevoked()) {
            throw new RuntimeException("Invalid refresh token");
        }
        var user = oldToken.getUser();
        var jwtToken = jwtService.generateToken(user);
        var refreshToken = jwtService.generateRefreshToken(user);
        oldToken.setRevoked(true);
        tokenRepository.save(oldToken);  // revoke old refresh token
        saveRefreshToken(refreshToken, user);  // save new refresh token
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .refreshToken(refreshToken)
                .id(user.getId())
                .build();
    }

}
