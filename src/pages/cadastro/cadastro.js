import React, { Component } from "react";
import FormularioCadastro from "./formulario-cadastro.js";

const axios = require("axios");
const FormValidators = require("./validacao");
const validarFormularioCadastro = FormValidators.validarFormularioCadastro;
const zxcvbn = require("zxcvbn");

class Cadastro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      user: {
        nome: "",
        email: "",
        senha: "",
        pwconfirm: ""
      },
      btnTxt: "mostrar senha",
      type: "password",
      btnImg: './assets/showPassword.svg',
      score: "0"
    };

    this.pwMask = this.pwMask.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitSignup = this.submitSignup.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.pwHandleChange = this.pwHandleChange.bind(this);
  }

  handleChange(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  pwHandleChange(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });

    if (event.target.value === "") {
      this.setState(state =>
        Object.assign({}, state, {
          score: "null"
        })
      );
    } else {
      var pw = zxcvbn(event.target.value);
      this.setState(state =>
        Object.assign({}, state, {
          score: pw.score + 1
        })
      );
    }
  }

  submitSignup(user) {
    var params = { nome: user.nome, senha: user.senha, email: user.email };
    console.log("tentando um cadastro");
    axios
      .post("http://localhost:3030/usuarios/", params)
      .then(res => {
        if (res.data.status === 201) {
          console.log("cadastro feito com sucesso");
        } else {
          console.log("erro no cadastro");
        }
        console.log("sai do if");
      })
      .catch(err => {
        console.log("Sign up data submit error: ", err);
      });
  }

  validateForm(event) {
    event.preventDefault();
    var payload = validarFormularioCadastro(this.state.user);
    if (payload.success) {
      this.setState({
        errors: {}
      });
      var user = {
        nome: this.state.user.nome,
        senha: this.state.user.senha,
        email: this.state.user.email
      };
      this.submitSignup(user);
    } else {
      const errors = payload.errors;
      this.setState({
        errors
      });
    }
  }

  pwMask(event) {
    event.preventDefault();
    this.setState(state =>
      Object.assign({}, state, {
        type: this.state.type === "password" ? "input" : "password",
        btnTxt: this.state.btnTxt === "mostrar senha" ? "esconder senha" : "mostrar senha",
        btnImg: this.state.btnImg === './assets/showPassword.svg' ? './assets/hidePassword.svg' : './assets/showPassword.svg',
      })
    );
  }

  render() {
    return (
      <div>
        <FormularioCadastro
          onSubmit={this.validateForm}
          onChange={this.handleChange}
          onPwChange={this.pwHandleChange}
          errors={this.state.errors}
          user={this.state.user}
          score={this.state.score}
          btnTxt={this.state.btnTxt}
          btnImg={this.state.btnImg}
          type={this.state.type}
          pwMask={this.pwMask}
        />
      </div>
    );
  }
}
export default Cadastro;
