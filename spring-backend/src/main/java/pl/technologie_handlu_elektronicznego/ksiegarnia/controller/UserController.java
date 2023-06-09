package pl.technologie_handlu_elektronicznego.ksiegarnia.controller;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.Role;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.User;
import pl.technologie_handlu_elektronicznego.ksiegarnia.repository.UserRepository;
import pl.technologie_handlu_elektronicznego.ksiegarnia.security.config.JwtService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/user")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
@Slf4j

public class UserController {
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    @Autowired
    UserRepository userRepository;

    @GetMapping("/get-all-users")
    public List<User> getClients(){
        return userRepository.findAll();
    }

    @PutMapping("/update-user/{id}")
    public ResponseEntity<?> updateUserData(@PathVariable("id") Integer id, @RequestBody User userRequest) throws Exception {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new Exception("User not found"));
        user.setName(userRequest.getName());
        user.setSecond_name(userRequest.getSecond_name());
        user.setBirthday(userRequest.getBirthday());
        user.setPhone_number(userRequest.getPhone_number());
        userRepository.save(user);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/update-user-address/{id}")
    public ResponseEntity<?> updateUserAddress(@PathVariable("id") Integer id, @RequestBody User userRequest) throws Exception {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new Exception("User not found"));
        user.setAddress(userRequest.getAddress());
        userRepository.save(user);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/delete-user/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable("id") Integer id) throws Exception {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new Exception("User not found"));
        userRepository.delete(user);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/get-user/{id}")
    public ResponseEntity<?> getUser(@PathVariable("id") Integer id) throws Exception {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new Exception("User not found"));
        return ResponseEntity.ok(user);
    }

    @PutMapping("/make-admin/{id}")
    public ResponseEntity<?> makeAdmin(@PathVariable("id") Integer id) throws Exception {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new Exception("User not found"));
        user.setRole(Role.ADMIN);
        userRepository.save(user);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/change-password/{id}")
    public ResponseEntity<?> changePassword(@PathVariable("id") Integer id, @RequestBody String password) throws Exception {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new Exception("User not found"));
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode jsonNode = objectMapper.readTree(password);
            String oldPassword = jsonNode.get("oldPassword").asText();
            String newPassword = jsonNode.get("newPassword").asText();
            if (passwordEncoder.matches(oldPassword, user.getPassword())) {
                user.setPassword(passwordEncoder.encode(newPassword));
                userRepository.save(user);
                return ResponseEntity.ok().build();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ResponseEntity.badRequest().build();
    }
}
