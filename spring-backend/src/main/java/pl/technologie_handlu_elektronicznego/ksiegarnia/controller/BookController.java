package pl.technologie_handlu_elektronicznego.ksiegarnia.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.Book;
import pl.technologie_handlu_elektronicznego.ksiegarnia.service.BookService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/books")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class BookController {
    private final BookService bookService;

    @GetMapping
    public List<Book>getAllBooks(){
        return bookService.getAllBooks();
    }

    @GetMapping(params = "category")
    public List<Book>getBooksByCategory(@RequestParam("category") String category){
        return bookService.getBooksByCategory(category);
    }

}
