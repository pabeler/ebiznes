package pl.technologie_handlu_elektronicznego.ksiegarnia;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
@RequestMapping("api/v1/")
public class KsiegarniaApplication {
	public static void main(String[] args) {
		SpringApplication.run(KsiegarniaApplication.class, args);
	}
}
