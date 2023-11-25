import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { showToastMessage } from "./ToastMessage";
import { fetchData } from "./FetchData";
import { useNavigate } from "react-router-dom";

export default function AccountDetails() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [data, setData] = useState("");

  const dateConverter = (date) => {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    let month = newDate.getMonth() + 1;
    let day = newDate.getDate();
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    return year + "-" + month + "-" + day;
  };

  useEffect(() => {
    const fetchResponse = async () => {
      const response = await fetchData();
      if (response) {
        setData(response.data);
      } else {
        alert("Nie udało się pobrać danych użytkownika");
      }
    };

    fetchResponse().then((r) => console.log(r));
  }, []);

  const handleAccountDetails = async (event) => {
    event.preventDefault();
    try {
      const user_id = sessionStorage.getItem("id");
      const url = "http://localhost:8080/api/v1/user/update-user/" + user_id;
      // console.log(url);
      const token = sessionStorage.getItem("token");

      await axios.put(
        url,
        {
          name: name,
          second_name: secondName,
          birthday: birthDate,
          phone_number: phoneNumber,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      showToastMessage("Dane zostały zaktualizowane", "success");
      window.location.reload();
    } catch (error) {
      console.error(error.message);
      showToastMessage("Dane nie zostały zaktualizowane", "error");
    } finally {
      setName("");
      setSecondName("");
      setBirthDate("");
      setPhoneNumber("");
    }
  };

  return (
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
                          {data.name ? data.name : "Nie zdefiniowano"}
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
                          {data.second_name
                            ? data.second_name
                            : "Nie zdefiniowano"}
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
                          {data.birthday
                            ? dateConverter(data.birthday)
                            : "Nie zdefiniowano"}
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
                          {data.phone_number
                            ? data.phone_number
                            : "Nie zdefiniowano"}
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
                  <Form.Control
                    type="text"
                    placeholder="Jan"
                    value={name}
                    required={true}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formSecondName">
                  <Form.Label>Nazwisko</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Kowalski"
                    value={secondName}
                    required={true}
                    onChange={(e) => setSecondName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formBirthDate">
                  <Form.Label>Data urodzenia</Form.Label>
                  <Form.Control
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formPhoneNumber">
                  <Form.Label>Numer telefonu</Form.Label>
                  <Form.Control
                    type="tel"
                    value={phoneNumber}
                    placeholder={"+48 123 456 789"}
                    required={true}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mt-3">
                  Zatwierdź zmiany
                </Button>

                <Button
                  variant="link"
                  onClick={() => navigate("/addressDetails")}
                >
                  Dane adresowe
                </Button>

                <Button
                  variant="link"
                  onClick={() => navigate("/changePassword")}
                >
                  Zmiana danych logowania
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
