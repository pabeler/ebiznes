import React, { useState, useEffect } from "react";
import axios from "axios";
import Book from "./Book";
import "./Home.css";

const Bestsellers = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/books");
        console.log(response.data);
        setBooks(response.data);
      } catch (error) {
        console.error("Nie udało się pobrać książek bestsellerów", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div id="products" className="products">
      <div className="row">
        <div className="col-sm-12">
          <div className="headline text-center mb-5 products-header-text bg-white pt-5">
            <h2 className="pb-3 position-relative d-inline-block products-header-text">
              <b>BESTSELLERY | ZOBACZ NAJCHĘTNIEJ WYBIERANE PRODUKTY</b>
            </h2>
          </div>
        </div>
      </div>
      <div className="row">
        {/* Example usage of Book component */}
        {/* Tutaj można zrobić potem sortowanie po najczęściej kupowanych książkach */}
        <div className="row">
          {books.slice(0, 4).map((book) => (
            <Book title={book.title} />
          ))}
        </div>
        {/* Repeat the above Book component with different props for other bestseller books */}
      </div>
      {/* Rest of the code */}
    </div>
  );
};

export default Bestsellers;
