package pl.technologie_handlu_elektronicznego.ksiegarnia.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.Review;
import pl.technologie_handlu_elektronicznego.ksiegarnia.repository.ReviewRepository;

import java.util.List;

@Service
@AllArgsConstructor
public class ReviewService {
    private final ReviewRepository reviewRepository;

    public void saveReview(Review review) {
        reviewRepository.save(review);
    }

    public List<Review> getReviewsByBookId(Long bookId) {
        return reviewRepository.getReviewsByBookId(bookId);
    }
}
