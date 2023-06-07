import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./Home.css";

const Book = ({ title }) => {
  const [id, setId] = useState(10);
  const [thumbnail, setThumbnail] = useState("");
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
        setThumbnail(book.imageUrl);
        setAuthors(book.authors);
        setPublisher(book.publisher);
        setDescription(book.description);
        setCategories(book.categories);
        setQuantityInStock(book.quantity);
        setPrice(book.price);
      } else {
        fetchDataFromApi();
      }
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const fetchDataFromApi = async () => {
    try {
      const googleBooksApiUrl = `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(
        title
      )}&maxResults=1`;
      const response = await axios.get(googleBooksApiUrl);
      const items = response.data.items;

      if (items && items.length > 0) {
        const bookData = items[0].volumeInfo;
        const thumbnailUrl = bookData.imageLinks?.thumbnail;
        const newBook = {
          id: id + 1,
          title,
          authors: bookData.authors
            ? await findOrCreateAuthors(bookData.authors)
            : [],
          publisher: bookData.publisher
            ? await findOrCreatePublisher(bookData.publisher)
            : null,
          description: bookData.description,
          categories: bookData.categories
            ? bookData.categories.map((category) => ({ name: category }))
            : [],
          quantity: 0,
          price: 0,
          imageUrl: thumbnailUrl || "/images/blank.png",
        };
        setId(newBook.id);
        setThumbnail(newBook.imageUrl);
        setAuthors(newBook.authors);
        setPublisher(newBook.publisher);
        setDescription(newBook.description);
        setCategories(newBook.categories);
        setQuantityInStock(newBook.quantity);
        setPrice(newBook.price);

        updateDatabase(newBook);
      } else {
        setThumbnail("/images/blank.png");
      }
    } catch (error) {
      console.error("Error fetching thumbnail:", error);
      setThumbnail("/images/blank.png");
    }
  };

  const findOrCreateAuthors = async (authorNames) => {
    const authors = [];
    for (const name of authorNames) {
      let response = await axios.get(
        `http://localhost:8080/api/v1/authors?name=${encodeURIComponent(name)}`
      );
      let author = response.data;
      if (!author) {
        response = await axios.post(
          "http://localhost:8080/api/v1/authors/add-author",
          {
            name,
          }
        );
        author = response.data;
      }
      authors.push(author);
    }
    return authors;
  };

  const findOrCreatePublisher = async (publisherName) => {
    let response = await axios.get(
      `http://localhost:8080/api/v1/publishers?name=${encodeURIComponent(
        publisherName
      )}`
    );
    let publisher = response.data;
    if (!publisher) {
      response = await axios.post(
        "http://localhost:8080/api/v1/publishers/add-publisher",
        {
          name: publisherName,
        }
      );
      publisher = response.data;
    }
    return publisher;
  };

  const updateDatabase = async (book) => {
    try {
      console.log("Updating database:", book);
      await axios.post("http://localhost:8080/api/v1/books/add-book", book);
    } catch (error) {
      console.error("Error updating database:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="col-sm-6 col-lg-3 product">
      <a href="http://localhost:3000/" className="d-block text-center mb-4">
        <div className="product-list">
          <div className="position-relative">
            <img
              src={thumbnail}
              alt="product"
              className="img-fluid product-image"
            />
          </div>
          <div className="product-name pt-3">
            <h3 className="text-capitalize">
              <b>{title}</b>
            </h3>
            <p className="product-price mb-0">{price}zł</p>
            <button
              type="button"
              // onClick={handleAddToCart}
              className="product-button btn btn-outline-danger"
            >
              Dodaj do koszyka
            </button>
          </div>
        </div>
      </a>
    </div>
  );
};

// Define prop types
Book.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Book;
