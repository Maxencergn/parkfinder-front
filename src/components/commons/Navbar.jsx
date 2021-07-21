import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../images/LogoRectangle.png';

function Navbar() {
  return (
    <Router>
      <div
        style={{
          height: '70px',
          backgroundColor: '#353E55',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '70px',
          }}
        >
          <img alt="" src={Logo} style={{ height: '70px', width: 'auto' }} />
          <div
            style={{
              height: '70px',
              backgroundColor: '#353E55',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Link to="/" className="navbar-items">
              Home
            </Link>
            <Link to="/profil" className="navbar-items">
              Profil
            </Link>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '70px',
          }}
        >
          <div className="navbar-log">Log out</div>
        </div>
      </div>
    </Router>
  );
}

export default Navbar;
