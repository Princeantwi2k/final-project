import React from 'react';
import ReactDOM from 'react-dom';
import store from './Container/App/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css'
import {Provider} from 'react-redux'
import './Styles/quiz.scss'
import '../node_modules/@mdi/font/css/materialdesignicons.min.css';

import '../node_modules/materialize-css/dist/js/materialize.min.js';
 


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
