import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render () {
    if (!this.props.book) {
      return <div>Select a book to get started.</div>
    }

    return (
      <div className="col-sm-8">
        <h3>Details of book:</h3>
        <p>
        { this.props.book.title }
        by : { this.props.book.author }
        pages: { this.props.book.pages }
        </p>
        <img src={this.props.book.bookImage} alt={this.props.book.title} />
      </div>
    );
  }
}


function mapStateToProps (state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
