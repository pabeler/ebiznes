import "./Settings.css"
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";
import {showToastMessage} from "./ToastMessage";
import {ToastContainer} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {fetchData} from "./FetchData";

export default function AddressDetails() {
    const navigate = useNavigate();

    const [data, setData] = useState(null);

    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [apartmentNumber, setApartmentNumber] = useState('');
    const [postalCode, setPostalCode] = useState('');

    useEffect(() => {
        const fetchResponse = async () => {
            const response = await fetchData();
            if (response) {
                setData(response.data);
            }
        };

        fetchResponse().then(r => console.log(r));
    }, []);

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
            window.location.reload();
        } finally {
            setCountry('');
            setCity('');
            setStreet('');
            setHouseNumber('');
            setApartmentNumber('');
            setPostalCode('');
        }
    }

    const addressConverter = (address) => {
        if (address === null) return ['', '', '', '', '', ''];
        const newAddress = address.split(',');
        return [newAddress[0], newAddress[1], newAddress[2], newAddress[3], newAddress[4], newAddress[5]];
    }

    return (
        <>
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
                                    <Button variant="link" onClick={() => navigate("/accountDetails")}>
                                        Dane użytkownika
                                    </Button>
                                    <Button variant="link" onClick={() => navigate("/changePassword")}>
                                        Zmiana danych logowania
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <ToastContainer/>
        </>
    );
  }
  