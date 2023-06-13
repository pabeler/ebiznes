package pl.technologie_handlu_elektronicznego.ksiegarnia.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.Review;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Integer> {

     List<Review> getReviewsByBookId(Long bookId);
}
