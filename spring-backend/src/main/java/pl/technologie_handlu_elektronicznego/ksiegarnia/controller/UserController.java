package pl.technologie_handlu_elektronicznego.ksiegarnia.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.User;
import pl.technologie_handlu_elektronicznego.ksiegarnia.repository.UserRepository;
import pl.technologie_handlu_elektronicznego.ksiegarnia.security.config.AuthenticationResponse;
import pl.technologie_handlu_elektronicznego.ksiegarnia.security.config.JwtService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/user")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor

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

    /*@PostMapping("/change-password/{id}")
    public ResponseEntity<?> changeCredentials(@PathVariable("id") Integer id, @RequestBody RegisterRequest request) throws Exception {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new Exception("User not found"));
        user = User.builder()
                .id(user.getId())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .name(user.getName())
                .second_name(user.getSecond_name())
                .birthday(user.getBirthday())
                .phone_number(user.getPhone_number())
                .role(user.getRole())
                .build();
        userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return ResponseEntity.ok(AuthenticationResponse.builder()
                .token(jwtToken)
                .build());
    }*/

    /*@PostMapping("/add-user")
    public ResponseEntity<?> addUser(@RequestBody User userRequest) {
        User user = new User();
        user.setEmail(userRequest.getEmail());
        user.setPassword(userRequest.getPassword());

        //save client to database
        userRepository.save(user);

        //return success response
        return ResponseEntity.ok().build();
    }*/
}
