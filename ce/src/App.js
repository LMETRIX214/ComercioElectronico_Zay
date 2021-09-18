import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Holamundo from './Componentes/HolaMundo';
import Fotos from './Componentes/Fotos';

function App() {
  return (
    <Router>
      <div className="contenedor">
        <h1>Pagina de inicio</h1>
        <switch>
          <Route path="/HolaMundo">
            <Holamundo/>
          </Route>
          <Route path="/Fotos">
          <Fotos/>
          </Route>
        </switch>
      </div>
    </Router>
  );
}

export default App;
