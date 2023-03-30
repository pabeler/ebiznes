import React from "react"
import "./Navbar.css"

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-xl ">
            <div className="container-fluid">
                <a className="navbar-brand" href="http://localhost:3000/">
                    <img className="d-inline-block align-text nav--logo" src="images\logo.png" alt="logo"/>
                    Księgarnia
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarXl" aria-controls="navbarXl" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarXl">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item nav-item_text ">
                            <a className="nav-link nav--menu_item" href="http://localhost:3000/">Strona Główna</a>
                        </li>
                        <li className="nav-item nav-item_text">
                            <a className="nav-link" href="http://localhost:3000/">Sklep</a>
                        </li>
                        <li className="nav-item nav-item_text">
                            <a className="nav-link" href="http://localhost:3000/">O nas</a>
                        </li>
                        <li className="nav-item nav-item_text">
                            <a className="nav-link" href="http://localhost:3000/">Kontakt</a>
                        </li>
                        <li className="nav-item nav-item_text">
                            <a className="nav-link" href="http://localhost:3000/">Blogi</a>
                        </li>
                        <li className="nav-item nav-item_text">
                            <a className="nav-link" href="http://localhost:3000/">Kategorie</a>
                        </li>
                        <li className="nav-item nav-item_text flex-fill">
                            <a className="nav-link" href="http://localhost:3000/">Serwisy</a>
                        </li>
                        <li className="nav-item nav-item_text">
                            <a className="nav-link" href="http://localhost:3000/">Zaloguj</a>
                        </li>
                        <li className="nav-item nav-item_join">
                            <a className="nav-link" href="http://localhost:3000/">Dołącz</a>
                        </li>
                    
                    </ul>
                </div>
            </div>
            
            
        </nav>
    )
}