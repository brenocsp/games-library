import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from './pages/login/login.js';
import Cadastro from "./pages/cadastro/cadastro.js"
import MeusJogos from './pages/meus-jogos/meus-jogos.js';
import MinhaConta from './pages/minha-conta/minha-conta';

function App() {
  return (
    <Router>
        <Switch>SignUpContainer
          <Route path='/login' component={Login}/>
          <Route path='/cadastro' component={Cadastro}/>
          <Route path='/meus-jogos' component={MeusJogos}/>
          <Route path='/minha-conta' component={MinhaConta}/>
        </Switch>
    </Router>
  );
}


export default App;