import React from "react";
import { Button, Form, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './cadastro.css'

import PasswordStr from "./PasswordStr";

const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user,
  score,
  btnTxt,
  type,
  pwMask,
  onPwChange
}) => {
  return (
    <div>
        <Row className='d-flex align-items-center cadastro-back-button'>
            <Link to='/login'><img src="./assets/arrow_back_white.png" alt="voltar para a página de login"/></Link>
        </Row>
        <Row className='d-flex align-items-center justify-content-center cadastro-page'>
            <Container>
                <Form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <Row>
                            <Col sm={12} lg={6}>
                                <Form.Label>Nome</Form.Label>
                                <Form.Control
                                    className='form-control'
                                    name="username"
                                    floatingLabelText="user name"
                                    value={user.username}
                                    onChange={onChange}
                                    errorText={errors.username}
                                /> 
                            </Col>
                            <Col sm={12} lg={6}>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    className='form-control'
                                    name="email"
                                    floatingLabelText="email"
                                    value={user.email}
                                    onChange={onChange}
                                    errorText={errors.email}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} lg={6}>
                                <Form.Label>Senha</Form.Label>
                                <div> 
                                    <Form.Control
                                        className='form-control-senha'
                                        type={type}
                                        name="password"
                                        floatingLabelText="password"
                                        value={user.password}
                                        onChange={onPwChange}
                                        errorText={errors.password}
                                    />
                                    <Button className="mostrar-senha-button" label={btnTxt} onClick={pwMask}><img src="./assets/visibility.svg"></img></Button>
                                </div>
                        
                                <div className="pwStrRow">
                                    {score >= 1 && (
                                        <div>
                                            <PasswordStr score={score}/>
                                        </div>
                                        )} 
                                </div>
                            </Col>

                            <Col sm={12} lg={6}>
                                <Form.Label>Confirmar Senha</Form.Label>
                                <Form.Control
                                    className='form-control'
                                    type={type}
                                    name="pwconfirm"
                                    floatingLabelText="confirm password"
                                    value={user.pwconfirm}
                                    onChange={onChange}
                                    errorText={errors.pwconfirm}
                                /> 
                            </Col>
                        </Row>
                    </div>
                    <Button variant='submit' className='submit-button'>Cadastre-se</Button>    
                </Form>
            </Container>
        </Row>
    </div>
    
  );
};

export default SignUpForm;
