package pl.technologie_handlu_elektronicznego.ksiegarnia.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import pl.technologie_handlu_elektronicznego.ksiegarnia.DTOs.ReviewDto;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.Book;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.Rating;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.Review;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.User;
import pl.technologie_handlu_elektronicznego.ksiegarnia.service.BookService;
import pl.technologie_handlu_elektronicznego.ksiegarnia.service.ReviewService;
import pl.technologie_handlu_elektronicznego.ksiegarnia.service.UserService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/reviews")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class ReviewController {
    private final ReviewService reviewService;
    public final BookService bookService;
    public final UserService userService;

    @PostMapping("/add")
    public void addReview(@RequestBody ReviewDto reviewDto) {
        Review newReview = new Review();

        Book book = bookService.findById(reviewDto.getBookId()).orElse(null);
        newReview.setBook(book);
        assert book != null;
        book.getReviews().add(newReview);

        User user = userService.findById(reviewDto.getUserId()).orElse(null);
        newReview.setUser(user);
        assert user != null;
        user.getReviews().add(newReview);

        newReview.setDescription(reviewDto.getDescription());
        newReview.setRating(Rating.valueOf(reviewDto.getRating()));

        reviewService.saveReview(newReview);
    }

    @GetMapping("/by-book-id/{bookId}")
    public List<Review> getReviewsByBookId(@PathVariable Long bookId) {
        return reviewService.getReviewsByBookId(bookId);
    }

}
