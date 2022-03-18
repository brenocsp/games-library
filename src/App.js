import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Login from './pages/login/login.js';
// import Cadastro from './pages/cadastro/cadastro.js';
import MeusJogos from './pages/meus-jogos/meus-jogos.js';
import minhaConta from './pages/minha-conta/minha-conta';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import SignUpContainer from "./pages/cadastro/SignUpContainer.js"

function App() {
  return (
    <Router>
        <Switch>SignUpContainer
          <Route path='/login' component={Login}/>
          <Route path='/cadastro' component={SignUpContainer}/>
          <Route path='/meus-jogos' component={MeusJogos}/>
          <Route path='/minha-conta' component={minhaConta}/>
        </Switch>
    </Router>
  );
}


export default App;