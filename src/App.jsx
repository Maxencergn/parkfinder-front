/* eslint-disable no-alert */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Home from './components/views/Home';
import Login from './components/views/Login';
import Profil from './components/views/Profil';
import AddPark from './components/views/AddPark';
import SearchPark from './components/views/SearchPark';
import Navbar from './components/commons/Navbar';

import SkateparksContext from './context/SkateparksContext';
import LoginContext from './context/LoginContext';

import './App.css';

function App() {
  const { REACT_APP_BACKEND_URL } = process.env;
  const [skateparks, setSkateparks] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  useEffect(() => {
    axios
      .get(`${REACT_APP_BACKEND_URL}/api/skateparks`)
      .then((response) => {
        setSkateparks(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <div className="App">
      <LoginContext.Provider value={{ setIsConnected }}>
        {isConnected ? (
          <Router>
            <Navbar />
            <SkateparksContext.Provider value={{ skateparks }}>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/addpark">
                  <AddPark />
                </Route>
                <Route path="/searchpark">
                  <SearchPark />
                </Route>
                <Route path="/profil">
                  <Profil />
                </Route>
              </Switch>
            </SkateparksContext.Provider>
          </Router>
        ) : (
          <Login />
        )}
      </LoginContext.Provider>
    </div>
  );
}

export default App;
