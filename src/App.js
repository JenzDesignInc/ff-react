import React from 'react';
import { HashRouter } from 'react-router-dom';
import Main from './components/Main/main';
import './assets/styles/app.css';
import 'font-awesome/css/font-awesome.min.css';


const App = () => (
  

  <div>
    <HashRouter>
    <Main />
    </HashRouter>
  </div>
);




export default App;
