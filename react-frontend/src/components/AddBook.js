import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";

export default function AddBook() {


    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h2>Dodaj książkę</h2>
                            <Form>
                                <Form.Group controlId="formTitle">
                                    <Form.Label>Tytuł</Form.Label>
                                    <Form.Control type="text" placeholder="Tytuł" />

                                 </Form.Group>
                                    <Form.Group controlId="formAuthor">
                                    <Form.Label>Autor</Form.Label>
                                    <Form.Control type="text" placeholder="Autor" />
                                </Form.Group>
                                <Form.Group controlId="formDescription">
                                    <Form.Label>Opis</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Opis" />
                                </Form.Group>
                                <Form.Group controlId="formCategory">
                                    <Form.Label>Kategoria</Form.Label>
                                    <Form.Control type="text" placeholder="Kategoria" />
                                </Form.Group>
                                <Form.Group controlId="formImage">
                                    <Form.Label>Obrazek</Form.Label>
                                    <Form.Control type="text" placeholder="Obrazek" />
                                </Form.Group>
                                <Form.Group controlId="formPrice">
                                    <Form.Label>Cena</Form.Label>
                                    <Form.Control type="text" placeholder="Cena" />
                                </Form.Group>
                                <Form.Group controlId="formQuantity">
                                    <Form.Label>Ilość</Form.Label>
                                    <Form.Control type="text" placeholder="Ilość" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Dodaj
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}