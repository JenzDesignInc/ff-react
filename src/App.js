import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import Main from './components/Main/main';
import logo from './logo.svg';
import './assets/styles/app.css';
import 'font-awesome/css/font-awesome.min.css';

import ReactGA from 'react-ga';

const App = () => (
  

  <div>
    <HashRouter>
    <Main />
    </HashRouter>
  </div>
);




export default App;
