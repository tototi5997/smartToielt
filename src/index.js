import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home/index'
import IRouter from './router/index'

ReactDOM.render(
    <IRouter />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();