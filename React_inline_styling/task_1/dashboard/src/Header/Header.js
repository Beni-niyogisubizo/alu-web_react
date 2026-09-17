import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import holbertonLogo from '../assets/holberton-logo.jpg';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  },

  logo: {
    height: '40vmin',
    pointerEvents: 'none',
  },
});

function Header() {
  return (
    <div className={css(styles.header)}>
      <img
        className={css(styles.logo)}
        src={holbertonLogo}
        alt="Holberton logo"
      />
      <h1>School dashboard</h1>
    </div>
  );
}

export default Header;
