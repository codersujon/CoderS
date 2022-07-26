import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './assets/styles/main.scss';
import {  } from "react-router-dom";

//BOOTSTRAP
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

