package pl.technologie_handlu_elektronicznego.ksiegarnia.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.Book;

import java.util.List;

public interface BookRepository extends JpaRepository<Book, Integer> {
    @Query("SELECT b FROM Book b join b.categories c where c.name= ?1")
    List<Book> findByCategory(String category);
    //todo: zrobić tak żeby działało po autorze
    @Query("SELECT b FROM Book b WHERE b.title LIKE %?1%")
    List<Book> findByTitleOrAuthorName(String searchTerm);



}
