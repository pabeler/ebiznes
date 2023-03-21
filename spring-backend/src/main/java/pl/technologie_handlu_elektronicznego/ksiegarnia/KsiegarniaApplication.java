package pl.technologie_handlu_elektronicznego.ksiegarnia;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.Client;
import pl.technologie_handlu_elektronicznego.ksiegarnia.repository.ClientRepository;

@SpringBootApplication
@RestController
@RequestMapping("api/v1/")
public class KsiegarniaApplication {

	private final ClientRepository clientRepository;

	KsiegarniaApplication(ClientRepository clientRepository){
		this.clientRepository = clientRepository;
	}

	public static void main(String[] args) {
		SpringApplication.run(KsiegarniaApplication.class, args);
	}

	@GetMapping("getCLients")
	public Long getClients(){
		return clientRepository.countAllClients();
	}

}
