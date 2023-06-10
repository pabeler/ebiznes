package pl.technologie_handlu_elektronicznego.ksiegarnia.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.Publisher;
import pl.technologie_handlu_elektronicznego.ksiegarnia.repository.PublisherRepository;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class PublisherService {
    private final PublisherRepository publisherRepository;


    public Optional<Publisher> findByName(String name) {
        return publisherRepository.findByName(name);
    }

    public Publisher save(Publisher publisher) {
        return publisherRepository.save(publisher);
    }

    public List<Publisher> findAll() {
        return publisherRepository.findAll();
    }
}
