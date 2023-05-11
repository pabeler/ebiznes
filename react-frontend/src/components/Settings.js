import "./Settings.css"
import {Button, Col, Container, Row} from "react-bootstrap";
function Settings() {
    return (
        <Container>
            <Row >
                <Col>
                    <h2>Dane Konta</h2>
                    <Row>
                        <label htmlFor="email" className="form-label">Nazwa użytkownika:</label>
                        <input type="name" className="form-control" id="name" placeholder="Wpisz nazwe użytkownika"
                              name="name"/>
                    </Row>
                    <Row>
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="email" className="form-control" id="email" placeholder="Wpisz email" name="email"/>
                    </Row>
                    <Row>
                        <label htmlFor="pwd" className="form-label">Hasło:</label>
                        <input type="password" className="form-control" id="pwd" placeholder="Wpisz hasło" name="pswd"/>
                    </Row>
                </Col>
                <Col>
                    <h2>Dane Adresowe</h2>
                    <Row>
                        <label htmlFor="email" className="form-label">Miasto:</label>
                        <input type="name" className="form-control" id="name" placeholder="Wpisz nazwe Miasta"
                               name="name"/>
                    </Row>
                    <Row>
                        <Col>
                            <label htmlFor="email" className="form-label">Ulica:</label>
                            <input type="email" className="form-control" id="email" placeholder="Wpisz ulice"
                                   name="email"/>
                        </Col>
                        <Col xs={4}>
                            <label htmlFor="email" className="form-label">Numer domu:</label>
                            <input type="email" className="form-control" id="email" placeholder="Wpisz numer domu"
                                   name="email"/>
                        </Col>
                    </Row>
                    <Row>
                        <label htmlFor="pwd" className="form-label">Kod pocztowy:</label>
                        <input type="password" className="form-control" id="pwd" placeholder="Wpisz kod pocztowy"
                               name="pswd"/>
                    </Row>
                </Col>
                <Col>
                    <h2>Dane użytkownika</h2>
                    <Row>
                        <label for="pwd" class="form-label">Imie i nazwisko:</label>
                        <input type="email" class="form-control" id="email" placeholder="Wpisz imie i nazwisko" name="email"/>
                    </Row>
                    <Row>
                        <label for="pwd" class="form-label">Data narodzin:</label>
                        <input type="email" class="form-control" id="email" placeholder="Wpisz date urodzin" name="email"/>
                    </Row>
                    <Row>
                        <label for="pwd" class="form-label">Numer Telefonu:</label>
                        <input type="email" class="form-control" id="email" placeholder="Wpisz numer telefonu" name="email"/>
                    </Row>
                </Col>
            </Row>
            <Row>
            </Row>
            <Row>
                <Col>
                    <Button variant="primary" type="submit">
                        Zapisz zmiany
                    </Button>
                </Col>
            </Row>
        </Container>

      /*<div class = "row">
          <div class="col-8 container settings-block">
                <div class="row">
                    <div class="col-4 container">
                            <h2>Dane Konta</h2>
                            <div class="mb-3 mt-3">
                                <label for="email" class="form-label">Nazwa użytkownika:</label>
                                <input type="name" class="form-control" id="name" placeholder="Wpisz nazwe użytkownika" name="name"/>
                            </div>
                            <div class="mb-3 mt-3">
                                <label for="email" class="form-label">Email:</label>
                                <input type="email" class="form-control" id="email" placeholder="Wpisz email" name="email"/>
                            </div>
                            <div class="mb-3">
                                <label for="pwd" class="form-label">Hasło:</label>
                                <input type="password" class="form-control" id="pwd" placeholder="Wpisz hasło" name="pswd"/>
                            </div>

                    </div>
                    <div class="col-4 container">
                        <h2>Dane Adresowe</h2>
                            <div class="mb-3 mt-3">
                                <label for="email" class="form-label">Miasto:</label>
                                <input type="name" class="form-control" id="name" placeholder="Wpisz nazwe Miasta" name="name"/>
                            </div>
                            <div class="row mb-3 mt-3">
                                <div class="col-8">
                                <label for="email" class="form-label">Ulica:</label>
                                <input type="email" class="form-control" id="email" placeholder="Wpisz ulice" name="email"/>
                            </div>
                                <div class="col-4">
                                <label for="email" class="form-label">Numer domu:</label>
                                <input type="email" class="form-control" id="email" placeholder="Wpisz numer domu" name="email"/>
                            </div>

                            </div>
                            <div class="mb-3">
                                <label for="pwd" class="form-label">Kod pocztowy:</label>
                                <input type="password" class="form-control" id="pwd" placeholder="Wpisz kod pocztowy" name="pswd"/>
                            </div>
                    </div>
                    <div>
                        <h2>Dane użytkownika</h2>
                        <div class="mb-3 container col-2">
                            <label for="pwd" class="form-label">Imie i nazwisko:</label>
                            <input type="email" class="form-control" id="email" placeholder="Wpisz imie i nazwisko" name="email"/>
                        </div>
                        <div class="mb-3 container col-2">
                            <label for="pwd" class="form-label">Data narodzin:</label>
                            <input type="email" class="form-control" id="email" placeholder="Wpisz date urodzin" name="email"/>
                        </div>
                        <div class="mb-3 container col-2">
                            <label for="pwd" class="form-label">Numer Telefonu:</label>
                            <input type="email" class="form-control" id="email" placeholder="Wpisz numer telefonu" name="email"/>
                        </div>
                    </div>
                    <div class="container col-2">
                        <button type="submit" class="btn btn-primary">Zapisz zmiany</button>
                    </div>
                    </div>
                </div>



      </div>*/
    );
  }
  
  export default Settings;
  