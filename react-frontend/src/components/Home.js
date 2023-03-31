import React from "react"
import "./Home.css";

export default function Home() {
    return (
        <>
        <section id="home" className="home pt-1 overflow-hidden">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                <div className="carousel-item active">
                    {/* tu będzi background przez api czy coś/ whatever */}
                    {/* <div className="home-banner home-banner-1" style={{backgoundImage:  `url(${background})`}}> */}
                    <div className="home-banner home-banner-1">
                        <div className="home-banner-text">
                            <h1>Bądź na bieżąco</h1>
                            <h2>Gorące nowości</h2>
                            <a href="http://localhost:3000/" className="btn btn-danger text-uppercase mt-4">Zobacz</a>    
                        </div>
                    </div>
                    {/* <img src="images\shopping-basket.png" className="d-block w-100" alt="..."/> */}
                </div>
                <div className="carousel-item">
                    <div className="home-banner home-banner-1">
                        <div className="home-banner-text">
                            <h1>MOCKUP</h1>
                            <h2>MOCKUP</h2>
                            <a href="http://localhost:3000/" className="btn btn-danger text-uppercase mt-4">Zobacz</a>    
                        </div>
                    </div>
                    {/* <img src="images\shopping-basket.png" className="d-block w-100" alt="..."/> */}
                </div>
                <div className="carousel-item">
                    <div className="home-banner home-banner-1">
                        <div className="home-banner-text">
                            <h1>MOCKUP</h1>
                            <h2>MOCKUP</h2>
                            <a href="http://localhost:3000/" className="btn btn-danger text-uppercase mt-4">Zobacz</a>    
                        </div>
                    </div>
                    {/* <img src="images\shopping-basket.png" className="d-block w-100" alt="..."/> */}
                </div>
            </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
    </div>
</section>

<div id="products" className="products">
    <div className="container-fluid">
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
            <div className="col-sm-6 col-lg-3 product">
                <a href="http://localhost:3000/" className="d-block text-center mb-4">
                    <div className="product-list">
                        <div className="position-relative">
                            <img src="images\Przedza.png" alt="product" className="img-fluid product-image-first"/>
                        </div>
                        <div className="product-name pt-3">
                            <h3 className="text-capitalize">
                                <b>Przędza. W poszukiwaniu wewnęrznej wolności.</b>
                            </h3>
                            <p className="product-price mb-0">26,60zł</p>
                            <button type="button"className="product-button btn btn-outline-danger">Dodaj do koszyka</button>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-sm-6 col-lg-3 product">
                <a href="http://localhost:3000/" className="d-block text-center mb-4">
                    <div className="product-list">
                        <div className="position-relative">
                            <img src="images\JP2.png" alt="product" className="img-fluid product-image-first"/>
                        </div>
                        <div className="product-name pt-3">
                            <h3 className="text-capitalize">
                                <b>Przędza. W poszukiwaniu wewnęrznej wolności.</b>
                            </h3>
                            <p className="product-price mb-0">26,60zł</p>
                            <button type="button"className="product-button btn btn-outline-danger">Dodaj do koszyka</button>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-sm-6 col-lg-3 product">
                <a href="http://localhost:3000/" className="d-block text-center mb-4">
                    <div className="product-list">
                        <div className="position-relative">
                            <img src="images\Corka.png" alt="product" className="img-fluid product-image-first"/>
                        </div>
                        <div className="product-name pt-3">
                            <h3 className="text-capitalize">
                                <b>Przędza. W poszukiwaniu wewnęrznej wolności.</b>
                            </h3>
                            <p className="product-price mb-0">26,60zł</p>
                            <button type="button"className="product-button btn btn-outline-danger">Dodaj do koszyka</button>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-sm-6 col-lg-3 product">
                <a href="http://localhost:3000/" className="d-block text-center mb-4">
                    <div className="product-list">
                        <div className="position-relative">
                            <img src="images\Rowni.png" alt="product" className="img-fluid product-image-first"/>
                        </div>
                        <div className="product-name pt-3">
                            <h3 className="text-capitalize">
                                <b>Przędza. W poszukiwaniu wewnęrznej wolności.</b>
                            </h3>
                            <p className="product-price mb-0">26,60zł</p>
                            <button type="button"className="product-button btn btn-outline-danger">Dodaj do koszyka</button>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>
</>
)
}