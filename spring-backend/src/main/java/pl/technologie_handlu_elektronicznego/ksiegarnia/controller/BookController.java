package pl.technologie_handlu_elektronicznego.ksiegarnia.controller;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.Book;
import pl.technologie_handlu_elektronicznego.ksiegarnia.service.BookService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/books")
@AllArgsConstructor
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

    @GetMapping(params = "search")
    public List<Book> getBooksBySearchTerm(@RequestParam("search") String searchTerm) {
        if (searchTerm == null || searchTerm.isEmpty())
            return bookService.getAllBooks();
        return bookService.getBooksBySearchTerm(searchTerm);
    }
    @GetMapping(params = "author")
    public List<Book> getBooksByAuthorName(@RequestParam("author") String authorName) {
        return bookService.getBooksByAuthorName(authorName);
    }

    @GetMapping("/{title}")
    public List<Book> getBooksByTitle(@PathVariable String title) {
        return bookService.getBooksByTitle(title);
    }

    @PutMapping("/{id}")
    public Book updateBook(@PathVariable Integer id, @RequestBody Book book) {
        return bookService.updateBook(id, book);
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/add-book")
    public Book addBook(@RequestBody Book book) {
        return bookService.addBook(book);
    }

}
