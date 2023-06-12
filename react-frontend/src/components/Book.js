import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./Home.css";
import CartContext from "../CartContext";
import { useNavigate } from "react-router-dom";

const Book = ({ title }) => {
  const navigate = useNavigate();
  const { cart, setCart } = useContext(CartContext);
  const [id, setId] = useState(10);
  const [image_url, setImageUrl] = useState("");
  const [authors, setAuthors] = useState([]);
  const [publisher, setPublisher] = useState(null);
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);
  const [quantityInStock, setQuantityInStock] = useState(0);
  const [price, setPrice] = useState(0);

  const fetchData = async () => {
    try {
      const books = await axios.get(
        `http://localhost:8080/api/v1/books/${encodeURIComponent(title)}`
      );

      if (books.data.length > 0) {
        const book = books.data[0];
        setId(book.id);
        setImageUrl(book.image_url);
        setAuthors(book.authors);
        setPublisher(book.publisher);
        setDescription(book.description);
        setCategories(book.categories);
        setQuantityInStock(book.quantity);
        setPrice(book.price);
      } else {
      }
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddToCart = () => {
    const book = {
      id,
      title,
      image_url,
      authors,
      publisher,
      description,
      categories,
      quantityInStock,
      price,
    };
    const existingBook = cart.find((item) => item.id === book.id);

    if (existingBook) {
      // If book exists, increase the quantity
      setCart(
        cart.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // If book does not exist, add it to the cart with quantity 1
      setCart([...cart, { ...book, quantity: 1 }]);
    }
  };

  return (
    <div className="col-sm-6 col-lg-3 product">
      <div className="d-block text-center mb-4">
        <div className="product-list">
          <div className="position-relative">
            <img
              src={image_url}
              alt="product"
              className="img-fluid product-image"
              onClick={() => navigate(`/product/${id}`)}
            />
          </div>
          <div className="product-name pt-3">
            <h3 className="text-capitalize">
              <b>{title}</b>
            </h3>
            <p className="product-price mb-0">{price}zł</p>
            <button
              type="button"
              onClick={handleAddToCart}
              className="product-button btn btn-outline-danger"
            >
              Dodaj do koszyka
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Define prop types
Book.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Book;
