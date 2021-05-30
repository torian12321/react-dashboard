import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.scss';
import App from './ui/views/SignUp';
import { AuthProvider } from "./ui/views/AuthContext";
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('🏓')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
