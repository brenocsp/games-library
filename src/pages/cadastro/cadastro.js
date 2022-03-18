import React, { useEffect, useState } from "react";
import { Button, Form, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './cadastro.css'

import axios from 'axios';

function Cadastro() {

    const [name, setUserName] = useState("");
    const [email, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    
  useEffect(() => {
        axios.post("http://localhost:3001/usuarios/",{
            nome: name,
            email: email,
            senha: password,
    })
          .then((response) => {
                setUserName(response.data);
                setUserEmail(response.data);
                setPassword(response.data);
            })
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
        }, []);
    
    // function validatePassword(){
    //     var password = document.getElementById("passwd").value
    //     var confirm_password = document.getElementById("passwdConfir").value;
    //         if(password === confirm_password) {
    //                 document.getElementById('resultado').innerHTML=''
    //             } else {
    //                 document.getElementById('resultado').innerHTML='não correspondem'
    //             }
    // }

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
                                    <Form.Control type='text' className='form-control' value={name} onChange={this.setUserName}/>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type='email' className='form-control'></Form.Control>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12} lg={6}>
                                    <Form.Label>Senha</Form.Label>
                                    <input  type='password' className='form-control' id='passwd' ></input>
                                </Col>
                                <Col sm={12} lg={6}>
                                <Form.Label>Confirmar Senha</Form.Label>
                                   <input /* onKeyUp={ validatePassword()}*/ type='password' className='form-control' id='passwdConfir'  ></input>
                                   <span id='resultado'></span>
                                </Col>
                            </Row>

                        </div>
                        <Button variant='submit' className='submit-button'>
                            Cadastre-se
                        </Button>
                       
                    </Form>
                </Container>
            </div>
        </div>
    );
}
export default Cadastro;