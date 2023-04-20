package pl.technologie_handlu_elektronicznego.ksiegarnia;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.Client;
import pl.technologie_handlu_elektronicznego.ksiegarnia.repository.AuthorRepository;
import pl.technologie_handlu_elektronicznego.ksiegarnia.repository.CategoryRepository;

@SpringBootApplication
@RestController
@RequestMapping("api/v1/")
public class KsiegarniaApplication {

	private final AuthorRepository authorRepository;
	private final CategoryRepository categoryRepository;

	KsiegarniaApplication(AuthorRepository authorRepository, CategoryRepository categoryRepository){
		this.authorRepository = authorRepository;
		this.categoryRepository = categoryRepository;
	}

	public static void main(String[] args) {
		SpringApplication.run(KsiegarniaApplication.class, args);
	}

	@GetMapping("getAuthors")
	public Long getAuthors(){
		return authorRepository.countAllAuthors();
	}
}
