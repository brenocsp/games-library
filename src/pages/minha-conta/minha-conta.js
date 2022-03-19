import React from 'react';
import { Form, Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Sidebar from '../../components/sidebar/sidebar.js';
import AlterarSenhaModal from '../../components/AlterarSenha/alterar-senha';
import AlterarEmailModal from '../../components/AlterarEmail/alterar-email';

import './minha-conta.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function MinhaConta() {
    return(
        <div className='conta'>
            <Sidebar/>
            <Container>
            <h1>Minha Conta</h1>
            <Row>
                <Col md={6}>                    
                    <Form>
                        <div className='formConta'>
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type='text' className='form-control'></Form.Control>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' className='form-control'></Form.Control>
                        </div>
                        <AlterarEmailModal/>
                        <br/>
                        <AlterarSenhaModal/>
                        </Form>
                </Col>
            </Row>
            
            </Container> 
                    
        </div>
    );
}

export default MinhaConta;