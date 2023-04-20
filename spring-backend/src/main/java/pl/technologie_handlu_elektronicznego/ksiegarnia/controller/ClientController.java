package pl.technologie_handlu_elektronicznego.ksiegarnia.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.Client;
import pl.technologie_handlu_elektronicznego.ksiegarnia.repository.ClientRepository;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("api/v1/client")
@RequiredArgsConstructor
public class ClientController {
    @Autowired
    ClientRepository clientRepository;

    @GetMapping("/get-all-clients")
    public List<Client> getClients(){
        return clientRepository.findAll();
    }

    @PostMapping("/add-client")
    public ResponseEntity<?> addAuthor(Client clientRequest) {
        //create new client
        Client client = new Client();
        client.setName(" ");
        client.setSecond_name(" ");
        client.setBirthday(new Date(2000, 1, 1));
        client.setAddress(" ");
        client.setPhone_number(" ");
        client.setEmail(clientRequest.getEmail());
        client.setPassword(clientRequest.getPassword());

        //save client to database
        clientRepository.save(client);

        //return success response
        return ResponseEntity.ok().build();
    }
}
