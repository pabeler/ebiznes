import React from "react";
import "./Avatar.css";
import {Link} from "react-router-dom";
export default function Avatar() {
    return (
        <div class="dropdown">
        <img class="img-thumbnail avatar dropdown-toggle" data-bs-toggle="dropdown" src="images\avatar.png" alt="avatar"/>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#"><Link to={"/settings"} className="nav-link nav-item_join">Settings</Link></a></li>
        </ul>
    </div>
    )
}