import React, { useContext } from "react"
import "./Navbar.css"
import Basket from  "./Basket"
import MyProfile from "./MyProfile";
import {Link} from "react-router-dom";
import {logContext} from '../App';

export default function Navbar() {
    const {log} = useContext(logContext);
    return (
        //Narazie jest xl, potem można zmienić że składa się kiedy jest mniejszy ekran
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
                    <ul className="navbar-nav ms-auto text-align-center">
                        <li className="nav-item nav-item_text mt-auto mb-auto me-2 ">
                            <a className="nav-link nav--menu_item" href="http://localhost:3000/">Strona Główna</a>
                        </li>
                        <li className="nav-item nav-item_text mt-auto mb-auto me-2 ">
                            <a className="nav-link" href="http://localhost:3000/">Sklep</a>
                        </li>
                        <li className="nav-item nav-item_text mt-auto mb-auto me-2">
                            <a className="nav-link" href="http://localhost:3000/">O nas</a>
                        </li>
                        <li className="nav-item nav-item_text mt-auto mb-auto me-2">
                            <a className="nav-link" href="http://localhost:3000/">Kontakt</a>
                        </li>
                        <li className="nav-item nav-item_text mt-auto mb-auto me-2">
                            <a className="nav-link" href="http://localhost:3000/">Blogi</a>
                        </li>
                        <li className="nav-item nav-item_text mt-auto mb-auto me-2">
                            <a className="nav-link" href="http://localhost:3000/">Kategorie</a>
                        </li>
                        <li className="nav-item nav-item_text mt-auto mb-auto me-2">
                            <a className="nav-link" href="http://localhost:3000/">Serwisy</a>
                        </li>
                        <li className="nav-item mt-auto mb-auto me-2">
                            {log==="unlogged"? <Link to={"/login"} className="nav-link nav-item_join">Logowanie</Link>:<div><MyProfile/></div>}
                        </li>
                        <li className="nav-item nav-item_text mt-auto mb-auto me-2">
                            <a className="nav-link" href="http://localhost:3000/">
                                <Basket/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}