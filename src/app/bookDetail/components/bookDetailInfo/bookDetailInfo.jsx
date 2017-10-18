import React from 'react'

class BookDetailInfo extends React.Component {
  render () {
    return(
      <div className='book-info-wrapper'>
        <div className='book-img-wrapper'>
          <img src={ this.props.book.image_url } className='book-img' alt='' />
        </div>
        <div className='book-info'>
          <h1 className='book-info-title'>{this.props.book.title}</h1>
          <h2 className='book-info-subtitle'>{this.props.book.author}</h2>
          <h2 className='book-info-subtitle'>{this.props.book.year}</h2>
          <h2 className='book-info-subtitle'>{this.props.book.genre}</h2>
          <p className='book-info-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    );
  }
}

export default BookDetailInfo;
