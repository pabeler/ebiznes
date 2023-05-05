package pl.technologie_handlu_elektronicznego.ksiegarnia.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.Role;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.User;
import pl.technologie_handlu_elektronicznego.ksiegarnia.repository.UserRepository;
import pl.technologie_handlu_elektronicznego.ksiegarnia.security.config.AuthenticationRequest;
import pl.technologie_handlu_elektronicznego.ksiegarnia.security.config.AuthenticationResponse;
import pl.technologie_handlu_elektronicznego.ksiegarnia.security.config.JwtService;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository repository;
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
        var jwtToken = jwtService.GenerateToken(user);
        return AuthenticationResponse.builder()
                .accessToken(jwtToken)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        var user = User.builder()
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.CLIENT)
                .build();
        repository.save(user);
        var jwtToken = jwtService.GenerateToken(user);
        return AuthenticationResponse.builder()
                .accessToken(jwtToken)
                .build();
    }
}