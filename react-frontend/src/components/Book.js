import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./Home.css";
import CartContext from "../CartContext";

const Book = ({ title }) => {
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

  // const fetchDataFromApi = async () => {
  //   try {
  //     const googleBooksApiUrl = `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(
  //       title
  //     )}&maxResults=1`;
  //     const response = await axios.get(googleBooksApiUrl);
  //     const items = response.data.items;

  //     if (items && items.length > 0) {
  //       const bookData = items[0].volumeInfo;
  //       const thumbnailUrl = bookData.imageLinks?.thumbnail;
  //       const newBook = {
  //         id: id + 1,
  //         title,
  //         authors: bookData.authors
  //           ? await findOrCreateAuthors(bookData.authors)
  //           : [],
  //         publisher: bookData.publisher
  //           ? await findOrCreatePublisher(bookData.publisher)
  //           : null,
  //         description: bookData.description,
  //         categories: bookData.categories
  //           ? bookData.categories.map((category) => ({ name: category }))
  //           : [],
  //         quantity: 0,
  //         price: 0,
  //         imageUrl: thumbnailUrl || "/images/blank.png",
  //       };
  //       setId(newBook.id);
  //       setThumbnail(newBook.imageUrl);
  //       setAuthors(newBook.authors);
  //       setPublisher(newBook.publisher);
  //       setDescription(newBook.description);
  //       setCategories(newBook.categories);
  //       setQuantityInStock(newBook.quantity);
  //       setPrice(newBook.price);

  //       updateDatabase(newBook);
  //     } else {
  //       setThumbnail("/images/blank.png");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching thumbnail:", error);
  //     setThumbnail("/images/blank.png");
  //   }
  // };

  // const findOrCreateAuthors = async (authorNames) => {
  //   const authors = [];
  //   for (const name of authorNames) {
  //     let response = await axios.get(
  //       `http://localhost:8080/api/v1/authors?name=${encodeURIComponent(name)}`
  //     );
  //     let author = response.data;
  //     if (!author) {
  //       response = await axios.post(
  //         "http://localhost:8080/api/v1/authors/add-author",
  //         {
  //           name,
  //         }
  //       );
  //       author = response.data;
  //     }
  //     authors.push(author);
  //   }
  //   return authors;
  // };

  // const findOrCreatePublisher = async (publisherName) => {
  //   let response = await axios.get(
  //     `http://localhost:8080/api/v1/publishers?name=${encodeURIComponent(
  //       publisherName
  //     )}`
  //   );
  //   let publisher = response.data;
  //   if (!publisher) {
  //     response = await axios.post(
  //       "http://localhost:8080/api/v1/publishers/add-publisher",
  //       {
  //         name: publisherName,
  //       }
  //     );
  //     publisher = response.data;
  //   }
  //   return publisher;
  // };

  // const updateDatabase = async (book) => {
  //   try {
  //     console.log("Updating database:", book);
  //     await axios.post("http://localhost:8080/api/v1/books/add-book", book);
  //   } catch (error) {
  //     console.error("Error updating database:", error);
  //   }
  // };

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
