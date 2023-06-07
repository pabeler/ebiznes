import React from "react";
import "./MyProfile.css";
import {Link} from "react-router-dom";
export default function MyProfile() {
    return (
        <div class="dropdown">
        <button type="button" class="btn dropdown-toggle nav-link nav-item_join profile-text"  data-bs-toggle="dropdown">Mój Profil
    
  </button>
        <ul class="dropdown-menu">
            <li><Link to={"/accountDetails"} className="nav-link nav-item_join">Settings</Link></li>
        </ul>
    </div>
    )
}