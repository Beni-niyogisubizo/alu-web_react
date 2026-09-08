import React from 'react';
import './App.css';
import holbertonLogo from '../assets/holberton-logo.jpg';
import { getFullYear, getFooterCopy } from '../utils/utils';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={holbertonLogo} alt="Holberton logo" />
        <h1>School dashboard</h1>
      </div>

      <div className="App-body">
        <p>Login to access the full dashboard</p>

        <label htmlFor="email">Email: </label>
        <input id="email" type="email" />

        <label htmlFor="password">Password: </label>
        <input id="password" type="password" />

        <button type="button">OK</button>
      </div>

      <div className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </div>
    </div>
  );
}

export default App;
