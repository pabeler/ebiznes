package pl.technologie_handlu_elektronicznego.ksiegarnia.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.User;
import pl.technologie_handlu_elektronicznego.ksiegarnia.repository.UserRepository;

import java.util.List;

@RestController
@RequestMapping("api/v1/client")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    @Autowired
    UserRepository userRepository;

    @GetMapping("/get-all-users")
    public List<User> getClients(){
        return userRepository.findAll();
    }

    @PostMapping("/add-user")
    public ResponseEntity<?> addUser(@RequestBody User userRequest) {
        User user = new User();
        user.setEmail(userRequest.getEmail());
        user.setPassword(userRequest.getPassword());

        //save client to database
        userRepository.save(user);

        //return success response
        return ResponseEntity.ok().build();
    }
}
