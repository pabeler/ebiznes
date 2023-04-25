import React from "react";
import "./Avatar.css";
export default function Avatar() {
    return (
        <div class="dropdown">
        <img class="img-thumbnail avatar dropdown-toggle" data-bs-toggle="dropdown" src="images\avatar.png" alt="avatar"/>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Settings</a></li>
        </ul>
    </div>
    )
}