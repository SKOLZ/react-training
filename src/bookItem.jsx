import React, {Component} from 'react';

class BookItem extends Component {

  render () {
    return (
      <div className='book'>
        <div className='book-img-wrapper'>
          <img src={ this.props.book.image_url } className='book-img' alt='' />
        </div>
        <h1 className='book-title'>
          { this.props.book.title }
        </h1>
        <h2 className='book-author'>
          { this.props.book.author }
        </h2>
      </div>
    );
  }
}

export default BookItem;
