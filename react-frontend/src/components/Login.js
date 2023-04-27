import {useState,useContext} from 'react';
import {Form, Button, Card} from 'react-bootstrap';
import {logContext} from '../App';
import axios from 'axios';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {showToastMessage} from "./ToastMessage";

export default function Login() {
    const {setLog} = useContext(logContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [showRegisterForm, setShowRegisterForm] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(true);

    const handleLogin = (event) => {
        event.preventDefault();

        setEmail('');
        setPassword('');
    };

    const handleResetPassword = (event) => {
        event.preventDefault();

        setEmail('');
        setPassword('');
    };

    const handleRegistration = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:8080/api/v1/client/add-client', { email, password });
            showToastMessage('Rejestracja powiodła się', 'success');
        } catch (error) {
            console.error(error.message);
            showToastMessage('Rejestracja nie powiodła się', 'error');
        } finally {
            setEmail('');
            setPassword('');
        }
    };

    const goToResetPassword = (event) => {
        event.preventDefault();
        setShowLoginForm(false);
        setShowForgotPassword(true);
    };

    const goToRegistration = (event)=> {
        event.preventDefault();
        setShowLoginForm(false);
        setShowRegisterForm(true);
    };

    const goToLogin = (event) => {
        event.preventDefault();
        setShowRegisterForm(false);
        setShowForgotPassword(false);
        setShowLoginForm(true);
    }

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
                                                          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required
                                                          onChange={(e) => setPassword(e.target.value)}/>
                                        </Form.Group>

                                        <Button variant="primary" type="submit" className="w-100 mt-3 mb-3" onClick={() => {setLog("logged")}}>
                                            Zaloguj
                                        </Button>

                                        <Button variant="link" onClick={goToResetPassword}>
                                            Zapomniałeś hasła?
                                        </Button>

                                        <Button variant="link" onClick={goToRegistration}>
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
                                            <Form.Control type="email" placeholder="example@example.com" value={email}
                                                          onChange={(e) => setEmail(e.target.value)}/>
                                        </Form.Group>

                                        <Button variant="primary" type="submit" className="w-100 mt-3">
                                            Resetuj hasło
                                        </Button>

                                        <Button variant="link" onClick={goToLogin}>
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
                                            <Form.Control type="email" placeholder="example@example.com" value={email}
                                                          onChange={(e) => setEmail(e.target.value)}/>
                                        </Form.Group>
                                        <Form.Group controlId="formRegisterPassword">
                                            <Form.Label>Hasło</Form.Label>
                                            <Form.Control type="password" placeholder="********" value={password}
                                                          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required
                                                          onChange={(e) => setPassword(e.target.value)}/>
                                        </Form.Group>
                                        <Button variant="primary" type="submit" className="w-100 mt-3">
                                            Zarejestruj
                                        </Button>
                                        <Button variant="link" onClick={goToLogin}>
                                            Powrót do logowania
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
    )
}