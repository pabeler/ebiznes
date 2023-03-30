import React from "react"
import "./Home.css";
import background from "./images/news_1_harry.jpg";

export default function Home() {
    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
             <div class="carousel-inner">
            <div class="carousel-item active">
                {/* tu będzi background przez api czy coś/ whatever */}
                <div class="home-banner home-banner-1" style={{backgoundImage:  `url(${background})`}}>
                    <div class="home-banner-text">
                        <h1>Bądź na bieżąco</h1>
                        <h2>Gorące nowości</h2>
                        <a href="http://localhost:3000/" class="btn btn-danger text-uppercase mt-4">Zobacz</a>    
                    </div>
                </div>
                {/* <img src="images\shopping-basket.png" class="d-block w-100" alt="..."/> */}
            </div>
            <div class="carousel-item">
                <div class="home-banner home-banner-2">
                    <div class="home-banner-text">
                        <h1>MOCKUP</h1>
                        <h2>MOCKUP</h2>
                        <a href="http://localhost:3000/" class="btn btn-danger text-uppercase mt-4">Zobacz</a>    
                    </div>
                </div>
                 {/* <img src="images\shopping-basket.png" class="d-block w-100" alt="..."/> */}
            </div>
            <div class="carousel-item">
                <div class="home-banner home-banner-3">
                    <div class="home-banner-text">
                        <h1>MOCKUP</h1>
                        <h2>MOCKUP</h2>
                        <a href="http://localhost:3000/" class="btn btn-danger text-uppercase mt-4">Zobacz</a>    
                    </div>
                </div>
                 {/* <img src="images\shopping-basket.png" class="d-block w-100" alt="..."/> */}
            </div>
        </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
)
}