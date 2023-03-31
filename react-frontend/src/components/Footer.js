import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <div className="basket">
            <img className="basket--icon" src="images\shopping-basket.png" alt="basket"/>
            <div className="basket--header">
                <h3 className="basket--header_text">Mój Koszyk</h3>
                <h3 className="basket--header_text">26.60zł</h3>
            </div>
        </div>
    )
}