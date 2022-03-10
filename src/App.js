import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Login from './pages/login/login.js';
import Cadastro from './pages/cadastro/cadastro.js';
import MeusJogos from './pages/meus-jogos/meus-jogos.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/cadastro' component={Cadastro}/>
          <Route path='/meus-jogos' component={MeusJogos}/>
        </Switch>
    </Router>
  );
}


export default App;