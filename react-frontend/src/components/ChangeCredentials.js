import {Button, Card, Form} from "react-bootstrap";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function ChangeCredentials() {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const navigate = useNavigate();

    const handleChangeCredentials = async (event) => {
        event.preventDefault();
        /*try {
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
        }*/
    };

    return (
        <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-lg-6">
                <Card>
                    <Card.Body>
                        <h2>Zmiana hasła</h2>
                        <Form onSubmit={handleChangeCredentials}>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Stare hasło</Form.Label>
                                <Form.Control type="password" placeholder="********" value={oldPassword}
                                              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required = {true}
                                              onChange={(e) => setOldPassword(e.target.value)}/>
                            </Form.Group>

                            <Form.Group controlId="formPassword">
                                <Form.Label>Nowe hasło</Form.Label>
                                <Form.Control type="password" placeholder="********" value={newPassword}
                                              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required = {true}
                                              onChange={(e) => setNewPassword(e.target.value)}/>
                            </Form.Group>

                            <Button variant="primary" type="submit" className="w-100 mt-3 mb-3">
                                Zatwierdź zmiany
                            </Button>

                            <Button variant="link" onClick={() => navigate("/accountDetails")}>
                                Dane użytkownika
                            </Button>

                            <Button variant="link" onClick={() => navigate("/addressDetails")}>
                                Dane adresowe
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </div>
    </div>
    );
}