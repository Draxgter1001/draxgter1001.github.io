import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/tailwind.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import profileImage from './assets/Uccio (League).jpeg';

const favicon = document.querySelector("link[rel='icon']") || document.createElement('link');
favicon.rel = 'icon';
favicon.type = 'image/jpeg';
favicon.href = profileImage;

if (!document.head.contains(favicon)) {
  document.head.appendChild(favicon);
}

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