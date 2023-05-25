import "./Settings.css"
import {Button, Card, Form} from "react-bootstrap";
import {ToastContainer} from "react-toastify";
import {useState} from "react";
import axios from "axios";
import {showToastMessage} from "./ToastMessage";

function Settings() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [name, setName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [apartmentNumber, setApartmentNumber] = useState('');
    const [postalCode, setPostalCode] = useState('');

    const [showAccountDetails, setShowAccountDetails] = useState(true);
    const [showAddressDetails, setShowAddressDetails] = useState(false);
    const [showChangeCredentials, setShowChangeCredentials] = useState(false);

    const handleChangeCredentials = async (event) => {
        event.preventDefault();
        try {
            const token = localStorage.getItem('token');
            console.log(token);
            await axios.post('http://localhost:8080/api/v1/user/change-password/',
                {email, password});
            showToastMessage('Dane logowania zostały zaktualizowane', 'success');
        } catch (error) {
            console.error(error.message);
            showToastMessage('Dane logowania nie zostały zaktualizowane', 'error');
        } finally {
            setEmail('');
            setPassword('');
        }
    };

    const handleAccountDetails = async (event) => {
        event.preventDefault();
        try {
            const user_id = localStorage.getItem('id');
            const url = 'http://localhost:8080/api/v1/user/update-user/' + user_id;
            // console.log(url);
            const token = localStorage.getItem('token');

            await axios.put(url, { 
                name: name, 
                second_name: secondName, 
                birthday: birthDate, 
                phone_number: phoneNumber
              }, {
                headers: {
                  'Authorization': `Bearer ${token}`
                }
              });

            showToastMessage('Dane zostały zaktualizowane', 'success');
        } catch (error) {
            console.error(error.message);
            showToastMessage('Dane nie zostały zaktualizowane', 'error');
        } finally {
            setName('');
            setSecondName('');
            setBirthDate('');
            setPhoneNumber('');
        }
    };

    const handleAddressDetails = async (event) => {
        event.preventDefault();
        try {
            const user_id = localStorage.getItem('id');
            const url = 'http://localhost:8080/api/v1/user/update-user-address/' + user_id;
            await axios.put(url,
                {address: country + ',' + city + ',' + street + ',' + houseNumber + ',' + apartmentNumber + ',' + postalCode});
            showToastMessage('Dane adresowe zostały zaktualizowane', 'success');
        } catch (error) {
            console.error(error.message);
            showToastMessage('Dane adresowe nie zostały zaktualizowane', 'error');
        } finally {
            setCountry('');
            setCity('');
            setStreet('');
            setHouseNumber('');
            setApartmentNumber('');
            setPostalCode('');
        }
    }

    const goToAccountDetails = (event) => {
        event.preventDefault();
        setShowAccountDetails(true);
        setShowAddressDetails(false);
        setShowChangeCredentials(false);
    };

    const goToAddressDetails = (event) => {
        event.preventDefault();
        setShowAccountDetails(false);
        setShowAddressDetails(true);
        setShowChangeCredentials(false);
    };

    const goToChangeCredentials = (event) => {
        event.preventDefault();
        setShowAccountDetails(false);
        setShowAddressDetails(false);
        setShowChangeCredentials(true);
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        {showChangeCredentials && (
                            <Card>
                                <Card.Body>
                                    <h2 className="text-center mb-4">Dane logowania</h2>
                                    <Form onSubmit={handleChangeCredentials}>
                                        <Form.Group controlId="formEmail">
                                            <Form.Label>Adres e-mail</Form.Label>
                                            <Form.Control type="email" placeholder="example@example.com" value={email} required
                                                          onChange={(e) => setEmail(e.target.value)}/>
                                        </Form.Group>

                                        <Form.Group controlId="formPassword">
                                            <Form.Label>Hasło</Form.Label>
                                            <Form.Control type="password" placeholder="********" value={password}
                                                          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required
                                                          onChange={(e) => setPassword(e.target.value)}/>
                                        </Form.Group>

                                        <Button variant="primary" type="submit" className="w-100 mt-3 mb-3">
                                            Zatwierdź zmiany
                                        </Button>

                                        <Button variant="link" onClick={goToAccountDetails}>
                                            Dane użytkownika
                                        </Button>

                                        <Button variant="link" onClick={goToAddressDetails}>
                                            Dane adresowe
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        )}

                        {showAccountDetails && (
                            <Card>
                                <Card.Body>
                                    <h2 className="text-center mb-4">Dane użytkownika</h2>
                                    <Form onSubmit={handleAccountDetails}>
                                        <Form.Group controlId="formName">
                                            <Form.Label>Imie</Form.Label>
                                            <Form.Control type="text" placeholder="Jan" value={name} required
                                                          onChange={(e) => setName(e.target.value)}/>
                                        </Form.Group>

                                        <Form.Group controlId="formSecondName">
                                            <Form.Label>Nazwisko</Form.Label>
                                            <Form.Control type="text" placeholder="Kowalski" value={secondName} required
                                                          onChange={(e) => setSecondName(e.target.value)}/>
                                        </Form.Group>

                                        <Form.Group controlId="formBirthDate">
                                            <Form.Label>Data urodzenia</Form.Label>
                                            <Form.Control type="date" value={birthDate} required
                                                          onChange={(e) => setBirthDate(e.target.value)}/>
                                        </Form.Group>

                                        <Form.Group controlId="formPhoneNumber">
                                            <Form.Label>Numer telefonu</Form.Label>
                                            <Form.Control type="tel" value={phoneNumber} required placeholder={"+48 123 456 789"}
                                                          onChange={(e) => setPhoneNumber(e.target.value)}/>
                                        </Form.Group>

                                        <Button variant="primary" type="submit" className="w-100 mt-3">
                                            Zatwierdź zmiany
                                        </Button>

                                        <Button variant="link" onClick={goToAddressDetails}>
                                            Dane adresowe
                                        </Button>

                                        <Button variant="link" onClick={goToChangeCredentials}>
                                            Zmiana danych logowania
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        )}

                        {showAddressDetails && (
                            <Card>
                                <Card.Body>
                                    <h2 className="text-center mb-4">Dane adresowe</h2>
                                    <Form onSubmit={handleAddressDetails}>
                                        <Form.Group controlId="formCountry">
                                            <Form.Label>Kraj</Form.Label>
                                            <Form.Control type="text" placeholder="Polska" value={country}
                                                            onChange={(e) => setCountry(e.target.value)}/>
                                        </Form.Group>
                                        <Form.Group controlId="formCity">
                                            <Form.Label>Miasto</Form.Label>
                                            <Form.Control type="text" placeholder="Warszawa" value={city}
                                                          onChange={(e) => setCity(e.target.value)}/>
                                        </Form.Group>
                                        <Form.Group controlId={"formStreet"}>
                                            <Form.Label>Ulica</Form.Label>
                                            <Form.Control type="text" placeholder="ul. Przykładowa" value={street}
                                                            onChange={(e) => setStreet(e.target.value)}/>
                                        </Form.Group>
                                        <Form.Group controlId={"formHouseNumber"}>
                                            <Form.Label>Numer domu</Form.Label>
                                            <Form.Control type="text" placeholder="1" value={houseNumber}
                                                            onChange={(e) => setHouseNumber(e.target.value)}/>
                                        </Form.Group>
                                        <Form.Group controlId={"formApartmentNumber"}>
                                            <Form.Label>Numer mieszkania</Form.Label>
                                            <Form.Control type="text" placeholder="1" value={apartmentNumber}
                                                            onChange={(e) => setApartmentNumber(e.target.value)}/>
                                        </Form.Group>
                                        <Form.Group controlId={"formPostalCode"}>
                                            <Form.Label>Kod pocztowy</Form.Label>
                                            <Form.Control type="text" placeholder="00-000" value={postalCode}
                                                            onChange={(e) => setPostalCode(e.target.value)}/>
                                        </Form.Group>
                                        <Button variant="primary" type="submit" className="w-100 mt-3">
                                            Zatwierdź zmiany
                                        </Button>
                                        <Button variant="link" onClick={goToAccountDetails}>
                                            Dane użytkownika
                                        </Button>
                                        <Button variant="link" onClick={goToChangeCredentials}>
                                            Zmiana danych logowania
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        )}
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </>
    );
  }
  
  export default Settings;
  