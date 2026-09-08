import $ from 'jquery';
import './header.css';

console.log('Init header');

$('body').append(`
  <div id="header">
    <div id="logo"></div>
    <h1>Holberton Dashboard</h1>
  </div>
`);
