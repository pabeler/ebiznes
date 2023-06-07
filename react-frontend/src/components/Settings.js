import "./Settings.css"
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";
import {showToastMessage} from "./ToastMessage";
import {ToastContainer} from "react-toastify";

function Settings() {
    const [data, setData] = useState(null);

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

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        const id = sessionStorage.getItem('id');
        const url = `http://localhost:8080/api/v1/user/get-user/${id}`;

        try {
            axios.get(url)
                .then(response => {
                    const responseData = response.data;
                    setData(responseData);
                    // alert(JSON.stringify(responseData));
                })
                .catch(error => {
                    alert(error.message);
                });
        } catch (error) {
            alert(error.message);
        }
    };

    const handleChangeCredentials = async (event) => {
        event.preventDefault();
        try {
            const token = sessionStorage.getItem('token');
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
            const user_id = sessionStorage.getItem('id');
            const url = 'http://localhost:8080/api/v1/user/update-user/' + user_id;
            // console.log(url);
            const token = sessionStorage.getItem('token');

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
            window.location.reload();
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
            const user_id = sessionStorage.getItem('id');
            const url = 'http://localhost:8080/api/v1/user/update-user-address/' + user_id;
            await axios.put(url,
                {address: country + ',' + city + ',' + street + ',' + houseNumber + ',' + apartmentNumber + ',' + postalCode});
            showToastMessage('Dane adresowe zostały zaktualizowane', 'success');
            window.location.reload();
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

    const dateConverter = (date) => {
        const newDate = new Date(date);
        const year = newDate.getFullYear();
        let month = newDate.getMonth()+1;
        let day = newDate.getDate();
        if (month < 10) month = "0" + month;
        if (day < 10) day = "0" + day;
        return year + "-" + month + "-" + day;
    }

    const addressConverter = (address) => {
        if (address === null) return ['', '', '', '', '', ''];
        const newAddress = address.split(',');
        return [newAddress[0], newAddress[1], newAddress[2], newAddress[3], newAddress[4], newAddress[5]];
    }

    return (
        <>
            {showChangeCredentials && (
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <Card>
                                <Card.Body>
                                    <h2>Dane logowania</h2>
                                    <Form onSubmit={handleChangeCredentials}>
                                        <Form.Group controlId="formEmail">
                                            <Form.Label>Adres e-mail</Form.Label>
                                            <Form.Control type="email" placeholder="example@example.com" value={email} required = {true}
                                                          onChange={(e) => setEmail(e.target.value)}/>
                                        </Form.Group>

                                        <Form.Group controlId="formPassword">
                                            <Form.Label>Hasło</Form.Label>
                                            <Form.Control type="password" placeholder="********" value={password}
                                                          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required = {true}
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
                        </div>
                    </div>
                </div>
            )}

            {showAccountDetails && (
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <h2>Aktualne dane</h2>
                                    <Container>
                                        <Row>
                                            <Card>
                                                <Card.Body>
                                                    <h5 className="text-center mb-4">Imie</h5>
                                                    {/*<h7 className="text-center mb-4">Nie zdefiniowano</h7>*/}
                                                    {data ? (
                                                        <h7 className="text-center mb-4">
                                                            {data.name ? (
                                                                data.name
                                                            ) : (
                                                                "Nie zdefiniowano"
                                                                )
                                                            }
                                                        </h7>
                                                    ) : (
                                                        <h7 className="text-center mb-4">Nie zdefiniowano</h7>
                                                    )}
                                                </Card.Body>
                                            </Card>
                                            <Card>
                                                <Card.Body>
                                                    <h5 className="text-center mb-4">Nazwisko</h5>
                                                    {/*<h7 className="text-center mb-4">Nie zdefiniowano</h7>*/}
                                                    {data ? (
                                                        <h7 className="text-center mb-4">
                                                            {data.second_name ? (
                                                                data.second_name
                                                            ) : (
                                                                "Nie zdefiniowano"
                                                                )
                                                            }
                                                        </h7>
                                                    ) : (
                                                        <h7 className="text-center mb-4">Nie zdefiniowano</h7>
                                                    )}
                                                </Card.Body>
                                            </Card>
                                            <Card>
                                                <Card.Body>
                                                    <h5 className="text-center mb-4">Data urodzenia</h5>
                                                    {/*<h7 className="text-center mb-4">Nie zdefiniowano</h7>*/}
                                                    {data ? (
                                                        <h7 className="text-center mb-4">
                                                            {data.birthday ? (
                                                                dateConverter(data.birthday)
                                                            ) : (
                                                                "Nie zdefiniowano"
                                                                )
                                                            }
                                                        </h7>
                                                    ) : (
                                                        <h7 className="text-center mb-4">Nie zdefiniowano</h7>
                                                    )}
                                                </Card.Body>
                                            </Card>
                                            <Card>
                                                <Card.Body>
                                                    <h5 className="text-center mb-4">Numer telefonu</h5>
                                                    {/*<h7 className="text-center mb-4">Nie zdefiniowano</h7>*/}
                                                    {data ? (
                                                        <h7 className="text-center mb-4">
                                                            {data.phone_number ? (
                                                                data.phone_number
                                                            ) : (
                                                                "Nie zdefiniowano"
                                                                )
                                                            }
                                                        </h7>
                                                    ) : (
                                                        <h7 className="text-center mb-4">Nie zdefiniowano</h7>
                                                    )}
                                                </Card.Body>
                                            </Card>
                                        </Row>
                                    </Container>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <h2 className="text-center mb-4">Dane użytkownika</h2>
                                    <Form onSubmit={handleAccountDetails}>
                                        <Form.Group controlId="formName">
                                            <Form.Label>Imie</Form.Label>
                                            <Form.Control type="text" placeholder="Jan" value={name} required={true}
                                                          onChange={(e) => setName(e.target.value)}/>
                                        </Form.Group>

                                        <Form.Group controlId="formSecondName">
                                            <Form.Label>Nazwisko</Form.Label>
                                            <Form.Control type="text" placeholder="Kowalski" value={secondName} required={true}
                                                          onChange={(e) => setSecondName(e.target.value)}/>
                                        </Form.Group>

                                        <Form.Group controlId="formBirthDate">
                                            <Form.Label>Data urodzenia</Form.Label>
                                            <Form.Control
                                                type="date"
                                                value={birthDate}
                                                onChange={(e) => setBirthDate(e.target.value)}/>
                                        </Form.Group>

                                        <Form.Group controlId="formPhoneNumber">
                                            <Form.Label>Numer telefonu</Form.Label>
                                            <Form.Control type="tel" value={phoneNumber} placeholder={"+48 123 456 789"} required={true}
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
                        </Col>
                    </Row>
                </Container>
            )}

            {showAddressDetails && (
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <h2>Aktualne dane</h2>
                                    <Container>
                                        <Row>
                                            <Card>
                                                <Card.Body>
                                                    <h5 className="text-center mb-4">Kraj</h5>
                                                    {/*<h7 className="text-center mb-4">Nie zdefiniowano</h7>*/}
                                                    {data ? (
                                                        <h7 className="text-center mb-4">
                                                            {addressConverter(data.address)[0] ? (
                                                                addressConverter(data.address)[0]
                                                            ) : (
                                                                "Nie zdefiniowano"
                                                                )
                                                            }
                                                        </h7>
                                                    ) : (
                                                        <h7 className="text-center mb-4">Nie zdefiniowano</h7>
                                                    )}
                                                </Card.Body>
                                            </Card>
                                            <Card>
                                                <Card.Body>
                                                    <h5 className="text-center mb-4">Miasto</h5>
                                                    {/*<h7 className="text-center mb-4">Nie zdefiniowano</h7>*/}
                                                    {data ? (
                                                        <h7 className="text-center mb-4">
                                                            {addressConverter(data.address)[1] ? (
                                                                addressConverter(data.address)[1]
                                                            ) : (
                                                                "Nie zdefiniowano"
                                                                )
                                                            }
                                                        </h7>
                                                    ) : (
                                                        <h7 className="text-center mb-4">Nie zdefiniowano</h7>
                                                    )}
                                                </Card.Body>
                                            </Card>
                                            <Card>
                                                <Card.Body>
                                                    <h5 className="text-center mb-4">Ulica</h5>
                                                    {/*<h7 className="text-center mb-4">Nie zdefiniowano</h7>*/}
                                                    {data ? (
                                                        <h7 className="text-center mb-4">
                                                            {addressConverter(data.address)[2] ? (
                                                                addressConverter(data.address)[2]
                                                            ) : (
                                                                "Nie zdefiniowano"
                                                                )
                                                            }
                                                        </h7>
                                                    ) : (
                                                        <h7 className="text-center mb-4">Nie zdefiniowano</h7>
                                                    )}
                                                </Card.Body>
                                            </Card>
                                            <Card>
                                                <Card.Body>
                                                    <h5 className="text-center mb-4">Numer domu</h5>
                                                    {/*<h7 className="text-center mb-4">Nie zdefiniowano</h7>*/}
                                                    {data ? (
                                                        <h7 className="text-center mb-4">
                                                            {addressConverter(data.address)[3] ? (
                                                                addressConverter(data.address)[3]
                                                            ) : (
                                                                "Nie zdefiniowano"
                                                                )
                                                            }
                                                        </h7>
                                                    ) : (
                                                        <h7 className="text-center mb-4">Nie zdefiniowano</h7>
                                                    )}
                                                </Card.Body>
                                            </Card>
                                            <Card>
                                                <Card.Body>
                                                    <h5 className="text-center mb-4">Numer mieszkania</h5>
                                                    {/*<h7 className="text-center mb-4">Nie zdefiniowano</h7>*/}
                                                    {data ? (
                                                        <h7 className="text-center mb-4">
                                                            {addressConverter(data.address)[4] ? (
                                                                addressConverter(data.address)[4]
                                                            ) : (
                                                                "Nie zdefiniowano"
                                                                )
                                                            }
                                                        </h7>
                                                    ) : (
                                                        <h7 className="text-center mb-4">Nie zdefiniowano</h7>
                                                    )}
                                                </Card.Body>
                                            </Card>
                                            <Card>
                                                <Card.Body>
                                                    <h5 className="text-center mb-4">Kod pocztowy</h5>
                                                    {/*<h7 className="text-center mb-4">Nie zdefiniowano</h7>*/}
                                                    {data ? (
                                                        <h7 className="text-center mb-4">
                                                            {addressConverter(data.address)[5] ? (
                                                                addressConverter(data.address)[5]
                                                            ) : (
                                                                "Nie zdefiniowano"
                                                                )
                                                            }
                                                        </h7>
                                                    ) : (
                                                        <h7 className="text-center mb-4">Nie zdefiniowano</h7>
                                                    )}
                                                </Card.Body>
                                            </Card>
                                        </Row>
                                    </Container>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <h2 className="text-center mb-4">Dane adresowe</h2>
                                    <Form onSubmit={handleAddressDetails}>
                                        <Form.Group controlId="formCountry">
                                            <Form.Label>Kraj</Form.Label>
                                            <Form.Control type="text" placeholder="Polska" value={country} required={true}
                                                            onChange={(e) => setCountry(e.target.value)}/>
                                        </Form.Group>
                                        <Form.Group controlId="formCity">
                                            <Form.Label>Miasto</Form.Label>
                                            <Form.Control type="text" placeholder="Warszawa" value={city} required={true}
                                                          onChange={(e) => setCity(e.target.value)}/>
                                        </Form.Group>
                                        <Form.Group controlId={"formStreet"}>
                                            <Form.Label>Ulica</Form.Label>
                                            <Form.Control type="text" placeholder="ul. Przykładowa" value={street} required={true}
                                                            onChange={(e) => setStreet(e.target.value)}/>
                                        </Form.Group>
                                        <Form.Group controlId={"formHouseNumber"}>
                                            <Form.Label>Numer domu</Form.Label>
                                            <Form.Control type="text" placeholder="1" value={houseNumber} required={true}
                                                            onChange={(e) => setHouseNumber(e.target.value)}/>
                                        </Form.Group>
                                        <Form.Group controlId={"formApartmentNumber"}>
                                            <Form.Label>Numer mieszkania</Form.Label>
                                            <Form.Control type="text" placeholder="1" value={apartmentNumber}
                                                            onChange={(e) => setApartmentNumber(e.target.value)}/>
                                        </Form.Group>
                                        <Form.Group controlId={"formPostalCode"}>
                                            <Form.Label>Kod pocztowy</Form.Label>
                                            <Form.Control type="text" placeholder="00-000" value={postalCode} required={true}
                                                          pattern={"[0-9]{2}-[0-9]{3}"}
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
                        </Col>
                    </Row>
                </Container>
            )}
            <ToastContainer/>
        </>
    );
  }
  
  export default Settings;
  