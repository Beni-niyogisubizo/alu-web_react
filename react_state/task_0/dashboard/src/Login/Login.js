import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  login: {
    margin: '20px',
  },

  label: {
    marginRight: '5px',

    '@media (max-width: 900px)': {
      display: 'block',
      marginTop: '10px',
      marginRight: '0',
    },
  },

  input: {
    '@media (max-width: 900px)': {
      display: 'block',
      marginTop: '5px',
    },
  },

  button: {
    '@media (max-width: 900px)': {
      display: 'block',
      marginTop: '10px',
    },
  },
});

function Login() {
  return (
    <div className={css(styles.login)}>
      <p>Login to access the full dashboard</p>

      <label className={css(styles.label)} htmlFor="email">
        Email:
      </label>
      <input
        className={css(styles.input)}
        id="email"
        type="email"
      />

      <label className={css(styles.label)} htmlFor="password">
        Password:
      </label>
      <input
        className={css(styles.input)}
        id="password"
        type="password"
      />

      <button className={css(styles.button)} type="button">
        OK
      </button>
    </div>
  );
}

export default Login;
