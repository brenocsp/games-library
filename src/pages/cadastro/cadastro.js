import React from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './cadastro.css'

function Cadastro() {
    return (
        <div className='cadastro-page'>
            <Link to='/login'><img src="./assets/arrow_back_white.png" alt="voltar para a página de login"/></Link>
            <Container>
                <Form>
                    <div className='form-group'>
                        <Row>
                            <Col>
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type='text' className='form-control'></Form.Control>

                                <Form.Label>Email</Form.Label>
                                <Form.Control type='email' className='form-control'></Form.Control>

                                <Form.Label>Senha</Form.Label>
                                <Form.Control type='password' className='form-control'></Form.Control>

                                <Form.Label>Confirmar Senha</Form.Label>
                                <Form.Control type='password' className='form-control'></Form.Control>
                            </Col>
                        </Row>

                    </div>
                    <Button variant='submit' className='submit-button'>Cadastre-se</Button>
                </Form>
            </Container>
        </div>
    );
}
export default Cadastro;