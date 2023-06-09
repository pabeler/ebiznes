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

    public List<Book> getBooksByAuthorName(String authorName) {
        return bookRepository.findBookByAuthors(authorName);
    }

    public List<Book> getBooksBySearchTerm(@Param("searchTerm")String searchTerm) {
       return bookRepository.findByTitleOrAuthorName( searchTerm );
    }


    public Book updateBook(Integer id, Book book) {
        Book bookToUpdate = bookRepository.findById(id).orElseThrow();
        bookToUpdate.setTitle(book.getTitle());
        bookToUpdate.setAuthors(book.getAuthors());
        bookToUpdate.setPublisher(book.getPublisher());
        bookToUpdate.setDescription(book.getDescription());
        bookToUpdate.setCategories(book.getCategories());
        bookToUpdate.setQuantity(book.getQuantity());
        bookToUpdate.setPrice(book.getPrice());
        bookToUpdate.setImage_url(book.getImage_url());
        return bookRepository.save(bookToUpdate);
    }

    public Book addBook(Book book) {
        return bookRepository.save(book);
    }


    public List<Book> getBooksByTitle(String title) {
        return bookRepository.findByTitle(title);
    }
}
