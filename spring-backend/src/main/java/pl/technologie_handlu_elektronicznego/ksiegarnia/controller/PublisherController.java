package pl.technologie_handlu_elektronicznego.ksiegarnia.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.Publisher;
import pl.technologie_handlu_elektronicznego.ksiegarnia.service.PublisherService;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1/publishers")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class PublisherController {
    private final PublisherService publisherService;

    @GetMapping("/publishers")
    public Publisher getPublisherByName(@RequestParam String name) {
        Optional<Publisher> publisher = publisherService.findByName(name);
        return publisher.orElse(null);
    }

    @PostMapping("/add-publisher")
    public Publisher createPublisher(@RequestBody Publisher publisher) {
        return publisherService.save(publisher);
    }
}
