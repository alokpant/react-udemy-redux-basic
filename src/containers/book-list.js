import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList () {
    const currentActiveBookTitle = (this.props.activeBook != null) ? this.props.activeBook.title : "";

    return this.props.books.map((book) => {
      const isBookSelected = (book.title == currentActiveBookTitle) ? "list-group-item active" : "list-group-item";
      return (
        <li key={ book.title }
            onClick={() => this.props.selectBook(book)}
            className={isBookSelected}>
            { book.title }
            <br/>by: {book.author}
        </li>
      );
    });
  }

  render () {
    return (
      <ul className="list-group col-sm-4">{ this.renderList() }</ul>
    )
  }
}

function mapStateToProps (state) {
  return {
    books: state.books,
    activeBook: state.activeBook
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ selectBook: selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
