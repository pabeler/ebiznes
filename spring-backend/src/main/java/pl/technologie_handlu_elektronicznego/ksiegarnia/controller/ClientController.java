package pl.technologie_handlu_elektronicznego.ksiegarnia.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.Client;
import pl.technologie_handlu_elektronicznego.ksiegarnia.repository.ClientRepository;

import java.util.List;

@RestController
@RequestMapping("api/v1/client")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class ClientController {
    @Autowired
    ClientRepository clientRepository;

    @GetMapping("/get-all-clients")
    public List<Client> getClients(){
        return clientRepository.findAll();
    }

    @PostMapping("/add-client")
    public ResponseEntity<?> addAuthor(@RequestBody Client clientRequest) {
        //create new client
        Client client = new Client();
        client.setEmail(clientRequest.getEmail());
        client.setPassword(clientRequest.getPassword());

        //save client to database
        clientRepository.save(client);

        //return success response
        return ResponseEntity.ok().build();
    }
}
