package pl.technologie_handlu_elektronicznego.ksiegarnia.service;

import lombok.AllArgsConstructor;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.Book;
import pl.technologie_handlu_elektronicznego.ksiegarnia.repository.BookRepository;

import java.util.List;

@Service
@AllArgsConstructor
public class BookService {
    private final BookRepository bookRepository;

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public List<Book> getBooksByCategory(String category) {
        return bookRepository.findByCategory(category);
    }

    public List<Book> getBooksBySearchTerm(@Param("searchTerm")String searchTerm) {
       return bookRepository.findByTitleOrAuthorName( searchTerm );
    }
}
