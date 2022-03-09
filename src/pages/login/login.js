import React from 'react';
import { Button, Form, Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './login.css'

function Login() {
    return (
        <div className='login-page'>
            <Container>
                <Form>
                    <div className='form-group'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' className='form-control'></Form.Control>

                        <Form.Label>Senha</Form.Label>
                        <Form.Control type='password' className='form-control'></Form.Control>
                    </div>
                    <Button variant='submit' className='submit-button'>Entrar</Button>
                    <br/>
                    <Form.Text className='texto-cadastro'>Novo usuário? <Link to='/cadastro'>Cadastre-se aqui</Link></Form.Text>
                </Form>
            </Container>
        </div>
    );
}
export default Login;