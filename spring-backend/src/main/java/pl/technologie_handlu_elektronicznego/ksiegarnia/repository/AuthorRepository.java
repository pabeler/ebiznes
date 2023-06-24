package pl.technologie_handlu_elektronicznego.ksiegarnia.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.Author;

import java.util.Optional;

public interface    AuthorRepository extends JpaRepository<Author,Integer> {
    @Query("SELECT COUNT(a) FROM Author a")
    Long countAllAuthors();

    Optional<Author> findByName(String name);
}
