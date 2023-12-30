import React from 'react';
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
    marginLeft: '20px',
    fontWeight: 'bold',
    cursor: 'pointer',
  };

  const handleTabClick = (tab) => {
    // Implement tab selection functionality here
  };

  return (
    <div>
      <div style={navbarStyle}>
        <img src={logoImage} alt="Your Logo" style={{ width: '100px', height: 'auto' }} />
        <div>
          <span style={tabStyle} onClick={() => handleTabClick('lajmet')}>
            Lajmet e orës
          </span>
          <span style={tabStyle} onClick={() => handleTabClick('live')}>
            Dëgjo live
          </span>
          <span style={tabStyle} onClick={() => handleTabClick('lista')}>
            Lista
          </span>
        </div>
      </div>
      {/* Content for selected tab goes here */}
    </div>
  );
};

export default Navbar;
