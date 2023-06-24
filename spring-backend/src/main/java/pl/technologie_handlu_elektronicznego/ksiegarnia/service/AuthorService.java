package pl.technologie_handlu_elektronicznego.ksiegarnia.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.Author;
import pl.technologie_handlu_elektronicznego.ksiegarnia.repository.AuthorRepository;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class AuthorService {
    private final AuthorRepository authorRepository;
    public Author save(Author author) {
        return authorRepository.save(author);
    }

    public Optional<Author> findByName(String name) {
        return authorRepository.findByName(name);
    }

    public Optional<Author> findById(Integer id) {
        return authorRepository.findById(id);
    }

    public void delete(Author author) {
        authorRepository.delete(author);
    }

    public List<Author> findAll() {
        return authorRepository.findAll();
    }
}
