import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/views/Home';
import Profil from './components/views/Profil';
import Navbar from './components/commons/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/profil">
            <Profil />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
