import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Shop.css';
import MultiRangeSlider from './MultiRange';
import Books from './Books';

export default function Shop() {
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(12);
  const [booksData, setBooksData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    fetchBooks();
    console.log(booksData);
    fetchCategories();
    console.log(categories);
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/books');
      setBooksData(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/category/get-all-categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleCategoryChange = (event) => {
    const categoryName = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedCategories([...selectedCategories, categoryName]);
    } else {
      setSelectedCategories(selectedCategories.filter((category) => category !== categoryName));
    }
  };

  // Get current books based on pagination and selected categories
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;

  const filteredBooks = booksData.filter((book) => {
    if (selectedCategories.length === 0) {
      return true; // No categories selected, show all books
    } else {
      return selectedCategories.includes(book.category); // Only show books with selected categories
    }
  });

  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="row w-100">
        <div className="col-2 settings-block mx-4">
          <div>
            <p className="font-filter-block ml-custom">Filtruj według</p>
          </div>
          <div>
            {categories.map((category) => (
              <div key={category.id} className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={category.name}
                  id={`category-${category.id}`}
                  onChange={handleCategoryChange}
                />
                <label className="form-check-label" htmlFor={`category-${category.id}`}>
                  {category.name}
                </label>
              </div>
            ))}
          </div>
          <div className="mt-2">
            <p className="font-filter-block ml-custom">Bestsellery</p>
          </div>
          <div className="form-check">
            {/* Checkbox for bestsellers */}
          </div>
          <div className="mt-2">
            <p className="font-filter-block ml-custom">Nowość</p>
          </div>
          <div className="form-check">
            {/* Checkbox for new releases */}
          </div>
          <p className="font-filter-block mt-2 no-margin">Cena</p>
          <MultiRangeSlider />
          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </div>
        <div className="col-9">
          <div className="mb-3 mt-3">
            <input
              type="search"
              className="form-control"
              id="search"
              placeholder="Szukaj w sklepie"
              name="search"
            />
          </div>
          <div className="settings-block">
            {/* Books component */}
            <Books books={currentBooks} />
            {/* Pagination */}
            <nav>
              <ul className="pagination">
                {filteredBooks.length > booksPerPage &&
                  [...Array(Math.ceil(filteredBooks.length / booksPerPage))].map((_, index) => (
                    <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                      <button className="page-link" onClick={() => paginate(index + 1)}>
                        {index + 1}
                      </button>
                    </li>
                  ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
