import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import "./Home.css";

const Book = ({ title, price }) => {
  const [thumbnail, setThumbnail] = useState('');

  useEffect(() => {
    fetchThumbnail();
  }, []);

  const fetchThumbnail = async () => {
  try {
    const googleBooksApiUrl = `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(
      title
    )}&maxResults=1`;
    const response = await axios.get(googleBooksApiUrl);
    const items = response.data.items;
    if (items && items.length > 0) {
      const thumbnailUrl = items[0].volumeInfo.imageLinks?.thumbnail;
      setThumbnail(thumbnailUrl || '/images/blank.png');
    } else {
      setThumbnail('/images/blank.png');
    }
  } catch (error) {
    console.error('Error fetching thumbnail:', error);
    setThumbnail('/images/blank.png');
  }
};


  return (
    <div className="col-sm-6 col-lg-3 product">
      <a href="http://localhost:3000/" className="d-block text-center mb-4">
        <div className="product-list">
          <div className="position-relative">
            <img src={thumbnail} alt="product" className="img-fluid product-image" />
          </div>
          <div className="product-name pt-3">
            <h3 className="text-capitalize">
              <b>{title}</b>
            </h3>
            <p className="product-price mb-0">{price}</p>
            <button type="button" className="product-button btn btn-outline-danger">Dodaj do koszyka</button>
          </div>
        </div>
      </a>
    </div>
  );
};

// Define prop types
Book.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Book;
