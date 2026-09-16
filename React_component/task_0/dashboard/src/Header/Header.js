import React from 'react';
import holbertonLogo from '../assets/holberton-logo.jpg';
import './Header.css';

function Header() {
  return (
    <div className="App-header">
      <img src={holbertonLogo} alt="Holberton logo" />
      <h1>School dashboard</h1>
    </div>
  );
}

export default Header;
