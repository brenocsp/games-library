import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Login from './pages/login/login.js';
import Cadastro from './pages/cadastro/cadastro.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/cadastro' component={Cadastro}/>
        </Switch>
      </div>
    </Router>
  );
}


export default App;