import React from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './cadastro.css'

function Cadastro() {
    return (
        <div>
            <div className='d-flex align-items-center cadastro-back-button'>
                <Link to='/login'><img src="./assets/arrow_back_white.png" alt="voltar para a página de login"/></Link>
            </div>
            <div className='d-flex align-items-center justify-content-center cadastro-page'>
                <Container>
                    <Form>
                        <div className='form-group'>
                            <Row>
                                <Col sm={12} lg={6}>
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control type='text' className='form-control'></Form.Control>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type='email' className='form-control'></Form.Control>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12} lg={6}>
                                    <Form.Label>Senha</Form.Label>
                                    <Form.Control type='password' className='form-control'></Form.Control>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <Form.Label>Confirmar Senha</Form.Label>
                                    <Form.Control type='password' className='form-control'></Form.Control>
                                </Col>
                            </Row>

                        </div>
                        <Button variant='submit' className='submit-button'>Cadastre-se</Button>
                    </Form>
                </Container>
            </div>
        </div>
    );
}
export default Cadastro;