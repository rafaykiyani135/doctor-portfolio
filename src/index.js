import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./assets/fontawesome/webfonts/OktaNeue-Black.ttf"
import "./assets/fontawesome/webfonts/OktaNeue-Bold.ttf"
import "./assets/fontawesome/webfonts/OktaNeue-Medium.ttf"
import "./assets/fontawesome/webfonts/OktaNeue-Normal.ttf"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
