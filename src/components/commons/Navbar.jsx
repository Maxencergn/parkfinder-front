import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import LoginContext from '../../context/LoginContext';
import './Navbar.css';
import Logo from '../../images/LogoRectangle.png';

function Navbar() {
  const { setIsConnected } = useContext(LoginContext);
  return (
    <div
      style={{
        height: '70px',
        backgroundColor: '#353E55',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'fixed',
        top: '0',
        width: '100%',
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
        <img alt="" src={Logo} style={{ height: '50px', width: 'auto' }} />
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
          <Link to="/addpark" className="navbar-items">
            Add
          </Link>
          <Link to="/searchpark" className="navbar-items">
            Search
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
        <button
          type="button"
          onClick={() => setIsConnected(false)}
          className="navbar-log"
        >
          <FiLogOut />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
