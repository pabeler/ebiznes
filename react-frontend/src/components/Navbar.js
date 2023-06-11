import React, { useContext } from "react";
import "./Navbar.css";
import BasketIcon from "./BasketIcon";
import MyProfile from "./MyProfile";
import { Link } from "react-router-dom";
import { logContext } from "../App";

export default function Navbar() {
  const { log } = useContext(logContext);
  return (
    //Narazie jest xl, potem można zmienić że składa się kiedy jest mniejszy ekran
    <nav className="navbar navbar-expand-xl ">
      {log !== "ADMIN" ? (
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img
              className="d-inline-block align-text nav--logo"
              src="images\logo.png"
              alt="logo"
            />
            Księgarnia
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarXl"
            aria-controls="navbarXl"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarXl">
            <ul className="navbar-nav ms-auto text-align-center">
              <li className="nav-item nav-item_text mt-auto mb-auto me-2 ">
                <Link to="/" className="nav-link nav--menu_item">
                  Strona Główna
                </Link>
              </li>
              <li className="nav-item nav-item_text mt-auto mb-auto me-2 ">
                <Link to="/shop" className="nav-link">
                  Sklep
                </Link>
              </li>
              <li className="nav-item nav-item_text mt-auto mb-auto me-2">
                <Link to="/aboutus" className="nav-link">
                  O nas
                </Link>
              </li>
              <li className="nav-item nav-item_text mt-auto mb-auto me-2">
                <Link to="/contact" className="nav-link">
                  Kontakt
                </Link>
              </li>
              <li className="nav-item mt-auto mb-auto me-2">
                {log === "unlogged" ? (
                  <Link to={"/login"} className="nav-link nav-item_join">
                    Logowanie
                  </Link>
                ) : (
                  <div>
                    <MyProfile />
                  </div>
                )}
              </li>
              <li className="nav-item nav-item_text mt-auto mb-auto me-2">
                <Link to="/cart" className="nav-link">
                  <BasketIcon />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand">
            <img
              className="d-inline-block align-text nav--logo"
              src="images\logo.png"
              alt="logo"
            />
            Księgarnia
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarXl"
            aria-controls="navbarXl"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarXl">
            <ul className="navbar-nav ms-auto text-align-center">
              <li className="nav-item nav-item_text mt-auto mb-auto me-2 ">
                <Link
                  to={"/"}
                  className="nav-link nav--menu_item"
                  href="http://localhost:3000/"
                >
                  Strona Główna
                </Link>
              </li>
              <li className="nav-item nav-item_text mt-auto mb-auto me-2 ">
                <Link to="/add-book" className="nav-link">
                  Dodaj książkę
                </Link>
              </li>
              <li className="nav-item nav-item_text mt-auto mb-auto me-2 ">
                <Link to="/edit-book" className="nav-link">
                  Edytuj książkę
                </Link>
              </li>
              <li className="nav-item mt-auto mb-auto me-2">
                <div>
                  <MyProfile />
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
