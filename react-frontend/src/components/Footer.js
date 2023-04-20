import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <div class="container-fluid footer-text">
            <footer class="pt-5 pb-3 mt-5">
                <div class="row">
                    <div class="col-md-5 offset-md-1 mb-3 text-start">
                        <form>
                        <h2>Księgarnia</h2>
                        <h6>Odkryj najnowszą i najlepszą literaturę w naszym KSIĘGARNI, w którym znajdziesz wyselekcjonowane bestsellery i wschodzących autorów</h6>
                        <p>Monthly digest of what's new and exciting from us.</p>
                        <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                            <label for="newsletter1" class="visually-hidden">Twój email</label>
                            <input id="newsletter1" type="text" class="form-control" placeholder="TWÓJ E-MAIL"></input>
                        </div>
                        <button class="btn btn-success mt-3 px-auto" type="button">Dołącz</button>
                        </form>
                    </div>
                    
                    <div class="col-6 col-md-2 mb-3">
                        <h5>Section</h5>
                        <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="http://localhost:3000/" class="nav-link p-0 text-muted">Home</a></li>
                        <li class="nav-item mb-2"><a href="http://localhost:3000/" class="nav-link p-0 text-muted">Features</a></li>
                        <li class="nav-item mb-2"><a href="http://localhost:3000/" class="nav-link p-0 text-muted">Pricing</a></li>
                        <li class="nav-item mb-2"><a href="http://localhost:3000/" class="nav-link p-0 text-muted">FAQs</a></li>
                        <li class="nav-item mb-2"><a href="http://localhost:3000/" class="nav-link p-0 text-muted">About</a></li>
                        </ul>
                    </div>

                    <div class="col-6 col-md-2 mb-3">
                        <h5>Section</h5>
                        <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="http://localhost:3000/" class="nav-link p-0 text-muted">Home</a></li>
                        <li class="nav-item mb-2"><a href="http://localhost:3000/" class="nav-link p-0 text-muted">Features</a></li>
                        <li class="nav-item mb-2"><a href="http://localhost:3000/" class="nav-link p-0 text-muted">Pricing</a></li>
                        <li class="nav-item mb-2"><a href="http://localhost:3000/" class="nav-link p-0 text-muted">FAQs</a></li>
                        <li class="nav-item mb-2"><a href="http://localhost:3000/" class="nav-link p-0 text-muted">About</a></li>
                        </ul>
                    </div>

                    <div class="col-6 col-md-2 mb-3">
                        <h5>Section</h5>
                        <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="http://localhost:3000/" class="nav-link p-0 text-muted">Home</a></li>
                        <li class="nav-item mb-2"><a href="http://localhost:3000/" class="nav-link p-0 text-muted">Features</a></li>
                        <li class="nav-item mb-2"><a href="http://localhost:3000/" class="nav-link p-0 text-muted">Pricing</a></li>
                        <li class="nav-item mb-2"><a href="http://localhost:3000/" class="nav-link p-0 text-muted">FAQs</a></li>
                        <li class="nav-item mb-2"><a href="http://localhost:3000/" class="nav-link p-0 text-muted">About</a></li>
                        </ul>
                    </div>

                </div>
                <p className="text-end">© 2023 Księgarnia, Inc. All rights reserved.</p>
                {/* <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                
                <ul class="list-unstyled d-flex">
                    <li class="ms-3"><a class="link-dark" href="http://localhost:3000/"><svg class="bi" width="24" height="24"></svg></a></li>
                    <li class="ms-3"><a class="link-dark" href="http://localhost:3000/"><svg class="bi" width="24" height="24"></svg></a></li>
                    <li class="ms-3"><a class="link-dark" href="http://localhost:3000/"><svg class="bi" width="24" height="24"></svg></a></li>
                </ul>
                </div> */}
            </footer>
        </div>
    )
}