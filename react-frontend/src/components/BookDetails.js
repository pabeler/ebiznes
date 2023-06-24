import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import StarRatings from "react-rating-stars-component";
import "./BookDetails.css";

const BookDetails = () => {
  const [book, setBook] = useState(null);
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(1);
  const [currentPage, setCurrentPage] = useState(1); // nowy stan
  const [reviewsPerPage] = useState(5); // nowy stan

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/books/by-id/${id}`)
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get(`http://localhost:8080/api/v1/reviews/by-book-id/${id}`)
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleAddReview = () => {
    const userId = sessionStorage.getItem("id");

    axios
      .post(`http://localhost:8080/api/v1/reviews/add`, {
        userId,
        bookId: id,
        description: review,
        rating: numberToRating(rating),
      })
      .then((response) => {
        axios
          .get(`http://localhost:8080/api/v1/reviews/by-book-id/${id}`)
          .then((response) => {
            setReviews(response.data);
            setReview("");
            setRating(1);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  if (!book) {
    return <div>Loading...</div>;
  }

  function numberToRating(number) {
    switch (number) {
      case 1:
        return "NIEPOROZUMIENIE";
      case 2:
        return "BARDZO_ZLA";
      case 3:
        return "SLABA";
      case 4:
        return "UJDZIE";
      case 5:
        return "SREDNIA";
      case 6:
        return "NIEZLA";
      case 7:
        return "DOBRA";
      case 8:
        return "BARDZO_DOBRA";
      case 9:
        return "REWELACYJNA";
      case 10:
        return "ARCYDZIELO";
      default:
        return "BRAK_OCENY";
    }
  }

  function ratingToNumber(rating) {
    switch (rating) {
      case "NIEPOROZUMIENIE":
        return 1;
      case "BARDZO_ZLA":
        return 2;
      case "SLABA":
        return 3;
      case "UJDZIE":
        return 4;
      case "SREDNIA":
        return 5;
      case "NIEZLA":
        return 6;
      case "DOBRA":
        return 7;
      case "BARDZO_DOBRA":
        return 8;
      case "REWELACYJNA":
        return 9;
      case "ARCYDZIELO":
        return 10;
      default:
        return 0;
    }
  }

  // Obliczanie liczby stron i aktualnych recenzji do wyświetlenia
  const firstReviewIndex = (currentPage - 1) * reviewsPerPage;
  const lastReviewIndex = firstReviewIndex + reviewsPerPage;
  const currentReviews = reviews.slice(firstReviewIndex, lastReviewIndex);
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  return (
    <div className="container">
      <h2>{book.title}</h2>
      <p>{book.description}</p>
      <img src={book.image_url} alt={book.title} className="img-fluid" />

      <h3>Recenzje</h3>
      {currentReviews.length === 0 ? (
        <p>Brak recenzji.</p>
      ) : (
        <div>
          {currentReviews.map((review) => (
            <div className="review" key={review.id}>
              <h4>{review.user.username}</h4>
              <StarRatings
                count={10}
                value={ratingToNumber(review.rating)}
                size={20}
                isHalf={false}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="gold"
                edit={false}
              />
              <p>{review.description}</p>
            </div>
          ))}
          <div className="pagination">
            {[...Array(totalPages).keys()].map((number) => (
              <button key={number} onClick={() => handlePageChange(number + 1)}>
                {number + 1}
              </button>
            ))}
          </div>
        </div>
      )}
      <div>
        <h4>Dodaj recenzję</h4>
        <textarea value={review} onChange={(e) => setReview(e.target.value)} />
        <StarRatings
          count={10}
          value={rating}
          size={24}
          activeColor="gold"
          onChange={(newRating) => setRating(newRating)}
        />
        <Button onClick={handleAddReview}>Dodaj recenzję</Button>
      </div>
    </div>
  );
};

export default BookDetails;
