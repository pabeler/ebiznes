import React from 'react';
import Book from './Book';
import "./Home.css";

const Bestsellers = () => {
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
        <Book
          imageSrc="images/Przedza.png"
          title="Przędza. W poszukiwaniu wewnętrznej wolności."
          price="26,60zł"
        />
        <Book
          imageSrc="images/Przedza.png"
          title="Przędza. W poszukiwaniu wewnętrznej wolności."
          price="26,60zł"
        />
        <Book
          imageSrc="images/Przedza.png"
          title="Przędza. W poszukiwaniu wewnętrznej wolności."
          price="26,60zł"
        />
        <Book
          imageSrc="images/Przedza.png"
          title="Przędza. W poszukiwaniu wewnętrznej wolności."
          price="26,60zł"
        />
        {/* Repeat the above Book component with different props for other bestseller books */}
      </div>
      {/* Rest of the code */}
    </div>
  );
};

export default Bestsellers;
