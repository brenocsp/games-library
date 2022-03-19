import React from 'react';
import { Button, Form, Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './login.css'

function Login() {
    return (
        <div className='d-flex align-items-center justify-content-center login-page'>
            <Container>
                <Row className='d-flex align-items-center justify-content-center'>
                    <Col sm={12} lg={8}>
                        <Form>
                            <div className='form-group'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type='email' className='form-control'></Form.Control>

                                <Form.Label>Senha</Form.Label>
                                <Form.Control type='password' className='form-control'></Form.Control>
                            </div>
                            <Button variant='submit' className='login-submit-button'>Entrar</Button>
                            <br/>
                            <Form.Text className='texto-cadastro'>Novo usuário?<Link to='/cadastro'>Cadastre-se aqui</Link></Form.Text>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Login;