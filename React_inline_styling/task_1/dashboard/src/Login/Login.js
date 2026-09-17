import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  login: {
    margin: '20px',
  },
});

function Login() {
  return (
    <div className={css(styles.login)}>
      <p>Login to access the full dashboard</p>

      <label htmlFor="email">Email: </label>
      <input id="email" type="email" />

      <label htmlFor="password">Password: </label>
      <input id="password" type="password" />

      <button type="button">OK</button>
    </div>
  );
}

export default Login;
