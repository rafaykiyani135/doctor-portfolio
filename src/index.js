import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/style.css';
import App from './App';

import "./assets/css/aos.css";
import "./assets/css/slick.css";
import "./assets/css/default.css";
import "./assets/css/animate.css";
import "./assets/css/style-two.css";
import "./assets/css/responsive.css";
import "./assets/css/slick-theme.css";
import "./assets/css/fontawesome.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
