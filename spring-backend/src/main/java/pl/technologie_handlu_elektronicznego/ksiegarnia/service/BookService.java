package pl.technologie_handlu_elektronicznego.ksiegarnia.service;

import lombok.AllArgsConstructor;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.Author;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.Book;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.Category;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.Publisher;
import pl.technologie_handlu_elektronicznego.ksiegarnia.repository.AuthorRepository;
import pl.technologie_handlu_elektronicznego.ksiegarnia.repository.BookRepository;
import pl.technologie_handlu_elektronicznego.ksiegarnia.repository.CategoryRepository;
import pl.technologie_handlu_elektronicznego.ksiegarnia.repository.PublisherRepository;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class BookService {
    private final BookRepository bookRepository;
    private final AuthorRepository authorRepository;
    private final CategoryRepository categoryRepository;
    private final PublisherRepository publisherRepository;

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
        Set<Author> authors = book.getAuthors().stream().map(author -> {
            Author existingAuthor = authorRepository.findByName(author.getName()).orElse(null);
            return existingAuthor != null ? existingAuthor : authorRepository.save(author);
        }).collect(Collectors.toSet());

        Set<Category> categories = book.getCategories().stream().map(category -> {
            Category existingCategory = categoryRepository.findByName(category.getName()).orElse(null);
            return existingCategory != null ? existingCategory : categoryRepository.save(category);
        }).collect(Collectors.toSet());

        Publisher publisher = publisherRepository.findByName(book.getPublisher().getName()).orElse(null);
        if (publisher == null) {
            publisher = publisherRepository.save(book.getPublisher());
        }

        book.setAuthors(authors);
        book.setCategories(categories);
        book.setPublisher(publisher);

        return bookRepository.save(book);
    }



    public List<Book> getBooksByTitle(String title) {
        return bookRepository.findByTitle(title);
    }
}
