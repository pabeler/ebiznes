import {useState} from 'react';
import {Form, Button, Card} from 'react-bootstrap';
import axios from 'axios';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [showRegisterForm, setShowRegisterForm] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(true);

    const handleLogin = (event) => {
        event.preventDefault();

    };

    const handleForgotPassword = (event) => {
        event.preventDefault();
        setShowLoginForm(false);
        setShowForgotPassword(true);
    };

    const handleRegister = async (event)=> {
        event.preventDefault();
        setShowLoginForm(false);
        setShowRegisterForm(true);
        try {

            // const response = await axios.post('http://localhost:8080/api/v1/client/add-client', { email, password });
            const response = await axios.post('http://localhost:8080/api/v1/client/add-client', { email: email, password: password });
            console.log(response.data)
            console.log(`User ${response.data.username} has been registered`);
        } catch (error) {
            console.error(error.message);
        }
    };

    const handleResetPassword = (event) => {
        event.preventDefault();
        setShowForgotPassword(false);
        setShowLoginForm(true);
    };

    const handleRegistration = (event) => {
        event.preventDefault();
        setShowRegisterForm(false);
        setShowLoginForm(true);
    };

    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        {showLoginForm && (
                            <Card>
                                <Card.Body>
                                    <h2 className="text-center mb-4">Logowanie</h2>
                                    <Form onSubmit={handleLogin}>
                                        <Form.Group controlId="formEmail">
                                            <Form.Label>Adres e-mail</Form.Label>
                                            <Form.Control type="email" placeholder="example@example.com" value={email}
                                                          onChange={(e) => setEmail(e.target.value)}/>
                                        </Form.Group>

                                        <Form.Group controlId="formPassword">
                                            <Form.Label>Hasło</Form.Label>
                                            <Form.Control type="password" placeholder="********" value={password}
                                                          onChange={(e) => setPassword(e.target.value)}/>
                                        </Form.Group>

                                        <Button variant="primary" type="submit" className="w-100 mt-3 mb-3">
                                            Zaloguj
                                        </Button>

                                        <Button variant="link" onClick={handleForgotPassword}>
                                            Zapomniałeś hasła?
                                        </Button>

                                        <Button variant="link" onClick={handleRegister}>
                                            Rejestracja
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        )}

                        {showForgotPassword && (
                            <Card>
                                <Card.Body>
                                    <h2 className="text-center mb-4">Resetowanie hasła</h2>
                                    <Form onSubmit={handleResetPassword}>
                                        <Form.Group controlId="formForgotEmail">
                                            <Form.Label>Adres e-mail</Form.Label>
                                            <Form.Control type="email" placeholder="example@example.com"/>
                                        </Form.Group>

                                        <Button variant="primary" type="submit" className="w-100 mt-3">
                                            Resetuj hasło
                                        </Button>

                                        <Button variant="link" onClick={handleResetPassword}>
                                            Powrót do logowania
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        )}

                        {showRegisterForm && (
                            <Card>
                                <Card.Body>
                                    <h2 className="text-center mb-4">Rejestracja</h2>
                                    <Form onSubmit={handleRegistration}>
                                        <Form.Group controlId="formRegisterEmail">
                                            <Form.Label>Adres e-mail</Form.Label>
                                            <Form.Control type="email" placeholder="example@example.com"/>
                                        </Form.Group>
                                        <Form.Group controlId="formRegisterPassword">
                                            <Form.Label>Hasło</Form.Label>
                                            <Form.Control type="password" placeholder="********"/>
                                        </Form.Group>
                                        <Button variant="primary" type="submit" className="w-100 mt-3">
                                            Zarejestruj
                                        </Button>
                                        <Button variant="link" onClick={handleRegistration}>
                                            Powrót do logowania
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}