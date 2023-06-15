import React from "react";
import "./Footer.css";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import {Container} from "react-bootstrap";

export default function Footer() {
  return (
      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'></section>
        <section className=''>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <Container className="text-justify">
                  <h6 className='text-uppercase fw-bold mb-4'>
                    Ksiegarnia
                  </h6>
                </Container>
                <Container className="text-justify">
                  Odkryj świat pełen przygód między stronami naszej księgarni! Tylko tu znajdziesz literaturę,
                  która otwiera drzwi do nieskończonych możliwości.
                </Container>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  Użyteczne linki
                </h6>
                <p>
                  <a href='http://localhost:3000/aboutus' className='text-reset'>
                    O nas
                  </a>
                </p>
                <p>
                  <a href='http://localhost:3000/regulations' className='text-reset'>
                    Regulamin
                  </a>
                </p>
                <p>
                  <a href='http://localhost:3000/privacy' className='text-reset'>
                    Polityka Prywatności
                  </a>
                </p>
              </MDBCol>

              {/*<MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>*/}
              {/*  <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>*/}
              {/*  <p>*/}
              {/*    <a href='#!' className='text-reset'>*/}
              {/*      Pricing*/}
              {/*    </a>*/}
              {/*  </p>*/}
              {/*  <p>*/}
              {/*    <a href='#!' className='text-reset'>*/}
              {/*      Settings*/}
              {/*    </a>*/}
              {/*  </p>*/}
              {/*  <p>*/}
              {/*    <a href='#!' className='text-reset'>*/}
              {/*      Orders*/}
              {/*    </a>*/}
              {/*  </p>*/}
              {/*  <p>*/}
              {/*    <a href='#!' className='text-reset'>*/}
              {/*      Help*/}
              {/*    </a>*/}
              {/*  </p>*/}
              {/*</MDBCol>*/}

              <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Dane Kontaktowe</h6>
                <p>
                  Łódź 90-001
                </p>
                <p>
                  ul. Piotrkowska 1233/33
                </p>
                <p>
                  info@ksiegarnia.pl
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2023 Copyright
          Ksiegarnia sp.z.o.o
        </div>
      </MDBFooter>
  );
}
