import React from "react";
import "./Home.css";
import Bestsellers from "./Bestsellers";

export default function Home() {
  return (
    <>
      {/* ----------------------------- Nowości ----------------------------- */}

      <section id="home" className="home pt-1 overflow-hidden">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="home-banner home-banner-1">
                <div className="home-banner-text">
                  <h1>Bądź na bieżąco</h1>
                  <h2>Gorące nowości</h2>
                  <a
                    href="http://localhost:3000/"
                    className="btn btn-danger text-uppercase mt-4"
                  >
                    Zobacz
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="home-banner home-banner-1">
                <div className="home-banner-text">
                  <h1>MOCKUP</h1>
                  <h2>MOCKUP</h2>
                  <a
                    href="http://localhost:3000/"
                    className="btn btn-danger text-uppercase mt-4"
                  >
                    Zobacz
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="home-banner home-banner-1">
                <div className="home-banner-text">
                  <h1>MOCKUP</h1>
                  <h2>MOCKUP</h2>
                  <a
                    href="http://localhost:3000/"
                    className="btn btn-danger text-uppercase mt-4"
                  >
                    Zobacz
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* ----------------------------- BESTSELLERY ----------------------------- */}

      <Bestsellers />

      {/* ----------------------------- DLACZEGO MY / INFO ----------------------------- */}
      <div id="info" className="info pb-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="headline text-left info-text info-text-header bg-white pt-3 mb-5">
                <h2 className="pb-3 position-relative d-inline-block">
                  Dlaczego powinieneś wybrać nas?
                </h2>
              </div>
            </div>
          </div>
          <div className="row ms-5 me-5 justify-content-center">
            <div className="col-sm-12 col-md-6 col-lg-3 info-text">
              <div className="info-text">
                <h3 className="pb-3 position-relative d-flex flex-column align-items-center">
                  <img
                    src="images/Delivery.png"
                    alt="info1"
                    className="img-fluid info-image"
                    style={{ width: "172px", height: "172px" }}
                  />
                  <span className="mt-3">Darmowa dostawa od 199zł</span>
                </h3>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 info-text">
              <div className="info-text">
                <h3 className="pb-3 position-relative d-flex flex-column align-items-center">
                  <img
                    src="images/Promotion.png"
                    alt="info2"
                    className="img-fluid info-image"
                    style={{ width: "172px", height: "172px" }}
                  />
                  <span className="mt-3">Wiele korzystnych promocji</span>
                </h3>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 info-text">
              <div className="info-text">
                <h3 className="pb-3 position-relative d-flex flex-column align-items-center">
                  <img
                    src="images/Guarantee.png"
                    alt="info3"
                    className="img-fluid info-image"
                    style={{ width: "172px", height: "172px" }}
                  />
                  <span className="mt-3">Bezpieczne zakupy</span>
                </h3>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 info-text">
              <div className="info-text">
                <h3 className="pb-3 position-relative d-flex flex-column align-items-center">
                  <img
                    src="images/Choice.png"
                    alt="info4"
                    className="img-fluid info-image"
                    style={{ width: "172px", height: "172px" }}
                  />
                  <span className="mt-3">Szeroki wybór</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
