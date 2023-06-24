import React from "react";
import "./MyProfile.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function MyProfile() {
  function logout() {
    // Remove tokens and user info from the local storage
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("refreshToken");
    sessionStorage.removeItem("id");

    // Remove auth header for future requests
    delete axios.defaults.headers.common["Authorization"];

    // Redirect to login page or home page
    this.props.history.push("/login");
  }

  return (
    <div class="dropdown">
      <button
        type="button"
        class="btn dropdown-toggle nav-link nav-item_join profile-text"
        data-bs-toggle="dropdown"
      >
        Mój Profil
      </button>
      <ul class="dropdown-menu">
        <li>
          <Link to={"/accountDetails"} className="nav-link nav-item_join">
            Ustawienia
          </Link>
        </li>
        <li>
          <Link to={"/orders"} className="nav-link nav-item_join">
            Zamówienia
          </Link>
        </li>
        <li>
          <Link to={"/"} className="nav-link nav-item_join" onClick={logout}>
            Wyloguj się
          </Link>
        </li>
      </ul>
    </div>
  );
}
