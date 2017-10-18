import React, {Component} from 'react';
import BookList from './bookList/bookList';
import { Route } from 'react-router-dom';
import BookDetail from './bookDetail/bookDetail'

class App extends Component {
  render () {
    return (
      <div>
        <Route path="/dashboard" component={BookList} />
        <Route path="/books/:id" component={BookDetail} />
      </div>
    );
  }
}

export default App;
