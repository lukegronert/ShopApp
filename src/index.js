import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import './styles/index.css';
import Routes from './components/Routes';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
