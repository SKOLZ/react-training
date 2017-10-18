import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import './app/app.css';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render (
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>,
  document.getElementById('root')
);
