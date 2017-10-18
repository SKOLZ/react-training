import React, {Component} from 'react';
import FilterForm from './components/filterForm/filterForm';
import BookItem from './components/bookItem/bookItem';
import { Link } from 'react-router-dom';
import './books.css';

class BookList extends Component {
  constructor () {
    super();
    const books = [{
      "id":1,
      "author":"Emmie Thiel",
      "title":"Ring of Bright Water",
      "genre":"Short story",
      "publisher":"Butterworth-Heinemann",
      "year":"1968",
      "image_url":null
    }, {
      "id":2,
      "author":"Christopher Pike",
      "title":"Scavenger Hunt",
      "genre":"other",
      "publisher":"Pocket Books",
      "year":"1989",
      "image_url":null
    }, {
      "id":3,
      "author":"Lois Duncan",
      "title":"Locked in time",
      "genre":"suspense",
      "publisher":"Little, Brown",
      "year":"1985",
      "image_url":"http://wolox-training.s3.amazonaws.com/uploads/6942334-M.jpg"
    }, {
      "id":4,
      "author":"Christopher Pike",
      "title":"Scavenger Hunt",
      "genre":"suspense",
      "publisher":"Pocket Books",
      "year":"1989",
      "image_url":"http://wolox-training.s3.amazonaws.com/uploads/6963511-M.jpg"
    }, {
      "id":5,
      "author":"Christopher Pike",
      "title":"Scavenger Hunt",
      "genre":"suspense",
      "publisher":"Pocket Books",
      "year":"1989",
      "image_url":"http://wolox-training.s3.amazonaws.com/uploads/6963511-M.jpg"
    }, {
      "id":6,
      "author":"Paula Hawkins",
      "title":"The Girl on the Train\n",
      "genre":"suspense",
      "publisher":"Riverhead Books",
      "year":"2015",
      "image_url":"http://wolox-training.s3.amazonaws.com/uploads/content.jpeg"
    }, {
      "id":7,
      "author":"Anthony Doerr",
      "title":"All the Light We Cannot See",
      "genre":"suspense",
      "publisher":"Scribner",
      "year":"2014",
      "image_url":"http://wolox-training.s3.amazonaws.com/uploads/content.jpeg"
    }, {
      "id":8,
      "author":"John Katzenbach",
      "title":"The analyst",
      "genre":"thriller",
      "publisher":"Ballantine Books",
      "year":"2003",
      "image_url":"http://wolox-training.s3.amazonaws.com/uploads/el-psicoanalista-analyst-john-katzenbach-paperback-cover-art.jpg"
    }, {
      "id":9,
      "author":"Andy Weir",
      "title":"The Martian",
      "genre":"fiction",
      "publisher":"Crown Publishing Group",
      "year":"2011",
      "image_url":"http://wolox-training.s3.amazonaws.com/uploads/41DNuJfahyL._SX322_BO1_204_203_200_.jpg"
    }];

    this.state = {
      filterField: '',
      filterValue: '',
      books,
      filteredBooks: books
    };
    this.handleFilter = this.handleFilter.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  }

  handleFilter (e) {
    e.preventDefault();
    if (!this.state.filterField || !this.state.filterValue) {
      this.setState({
        filteredBooks: this.state.books
      });
      return;
    }

    this.setState({
      filteredBooks: this.state.books.filter((book) => {
        return book[this.state.filterField].toLowerCase().includes(this.state.filterValue.toLowerCase());
      })
    });
  }

  render () {
    const bookItems = this.state.filteredBooks.map((book) => {
      return (
        <Link key={book.id} to={'/books/' + book.id}>
          <BookItem book={book} />
        </Link>
      )
    });
    return (
      <div className="filtered-book-list">
        <FilterForm
          filterField={this.state.filterField}
          filterValue={this.state.filterValue}
          onInputChange={this.handleInputChange}
          onFilterSubmit={this.handleFilter}
        />
        <div className="books">
          {bookItems}
        </div>
      </div>
    );
  }
}

export default BookList;
