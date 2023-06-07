import React from 'react';
import Book from './Book';

const Books = ({ books }) => {
  return (
    <div className="row">
      {books.map((book) => (
        <Book
          key={book.id}
          imageSrc={book.image_url}
          title={book.title}
          price={book.price}
        />
      ))}
    </div>
  );
};


export default Books;
