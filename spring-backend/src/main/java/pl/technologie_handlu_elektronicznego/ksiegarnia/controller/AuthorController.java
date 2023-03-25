package pl.technologie_handlu_elektronicznego.ksiegarnia.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.relational.core.sql.In;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.Author;
import pl.technologie_handlu_elektronicznego.ksiegarnia.repository.AuthorRepository;

import java.util.Optional;

@RestController
@RequestMapping("api/v1/author")
@RequiredArgsConstructor
public class AuthorController {

    @Autowired
    private AuthorRepository authorRepository;

    @PostMapping("/add-author")
    public ResponseEntity<?> addAuthor(@RequestBody Author authorRequest) {
        //create new author
        Author author = new Author();
        author.setName(authorRequest.getName());
        author.setSecond_name(authorRequest.getSecond_name());

        //save author to database
        authorRepository.save(author);

        //return success response
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/delete-author/{id}")
    public ResponseEntity<?> deleteAuthor(@PathVariable("id") Integer id) throws Exception {
        Author author = authorRepository.findById(id)
                .orElseThrow(() -> new Exception("Author not found"));


        // delete author from database
        authorRepository.delete(author);

        // return success response
        return ResponseEntity.ok().build();
    }

    @PutMapping("/update-author/{id}")
    public ResponseEntity<?> updateAuthor(@PathVariable("id") Integer id, @RequestBody Author authorRequest) throws Exception {
        // find author by id
        Author author = authorRepository.findById(id)
                .orElseThrow(() -> new Exception("Author not found"));

        // update author fields
        author.setName(authorRequest.getName());
        author.setSecond_name(authorRequest.getSecond_name());

        // save author to database
        authorRepository.save(author);

        // return success response
        return ResponseEntity.ok().build();
    }


}


/*
@PostMapping("/employees")
    public Employee createEmployee(@Valid @RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }
 */