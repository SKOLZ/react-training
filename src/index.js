import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './app.css'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Dashboard from './bookList'

render (
  <Router history={browserHistory}>

    <Route path="/dashboard" component={App}>
      <IndexRoute component={Dashboard}/>
    </Route>
    <Route path="/books/:id" component={bookDetail} />
  </Router>,
  document.getElementById('app')
);
