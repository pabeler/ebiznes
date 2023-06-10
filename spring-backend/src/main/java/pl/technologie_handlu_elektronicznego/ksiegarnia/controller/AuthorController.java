package pl.technologie_handlu_elektronicznego.ksiegarnia.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.Author;
import pl.technologie_handlu_elektronicznego.ksiegarnia.service.AuthorService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/authors")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")


public class AuthorController {

    private final AuthorService authorService;

    @PostMapping("/add-author")
    public ResponseEntity<?> addAuthor(@RequestBody Author authorRequest) {
        //create new author
        Author author = new Author();
        author.setName(authorRequest.getName());

        //save author to database
        authorService.save(author);

        //return success response
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/delete-author/{id}")
    public ResponseEntity<?> deleteAuthor(@PathVariable("id") Integer id) throws Exception {
        Author author = authorService.findById(id)
                .orElseThrow(() -> new Exception("Author not found"));


        // delete author from database
        authorService.delete(author);

        // return success response
        return ResponseEntity.ok().build();
    }

    @PutMapping("/update-author/{id}")
    public ResponseEntity<?> updateAuthor(@PathVariable("id") Integer id, @RequestBody Author authorRequest) throws Exception {
        // find author by id
        Author author = authorService.findById(id)
                .orElseThrow(() -> new Exception("Author not found"));

        // update author fields
        author.setName(authorRequest.getName());

        // save author to database
        authorService.save(author);

        // return success response
        return ResponseEntity.ok().build();
    }
    @GetMapping("/all")
    public List<Author> getAllAuthors() {
        return authorService.findAll();
    }
    @GetMapping
    public Author getAuthorByName(@RequestParam String name) {
        Optional<Author> author = authorService.findByName(name);
        return author.orElse(null);
    }

    @PostMapping
    public Author createAuthor(@RequestBody Author author) {
        return authorService.save(author);
    }
}