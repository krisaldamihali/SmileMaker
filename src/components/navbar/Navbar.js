import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../images/logo.png';

const Navbar = () => {
  const navbarStyle = {
    backgroundColor: '#A6B9FA',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const tabStyle = {
    textDecoration: 'none',
    color: 'black',
    marginLeft: '50px',
    fontWeight: 'bold',
    cursor: 'pointer',
    flex: '1', 
    textAlign: 'center', 
    fontSize:'30px',
  };

  const logoStyle = {
    width: '150px',
    height: 'auto',
    cursor: 'pointer',
  };

  return (
    <div>
      <div style={navbarStyle}>
        <Link to="/">
          <img src={logoImage} alt="Your Logo" style={logoStyle} />
        </Link>
        <div style={{ display: 'flex', flex: '1', justifyContent: 'center' }}>
          <span style={tabStyle}>
            <a href="https://www.oranews.tv/lajmet-e-fundit" target="_blank" rel="noopener noreferrer">
              Lajmet e orës
            </a>
          </span>
          <span style={tabStyle}>
            <a href="https://shqipfm.al/degjo-live/" target="_blank" rel="noopener noreferrer">
              Dëgjo live
            </a>
          </span>
          <span style={tabStyle}>
            <Link to="/lista">Lista</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
