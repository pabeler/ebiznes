package pl.technologie_handlu_elektronicznego.ksiegarnia.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.technologie_handlu_elektronicznego.ksiegarnia.security.config.AuthenticationRequest;
import pl.technologie_handlu_elektronicznego.ksiegarnia.security.config.AuthenticationResponse;

@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor

public class AuthenticationController {

    private final AuthenticationService service;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody RegisterRequest request
    ) {
        return ResponseEntity.ok(service.register(request));
    }
    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest request
    ) {
        return ResponseEntity.ok(service.authenticate(request));
    }
}
