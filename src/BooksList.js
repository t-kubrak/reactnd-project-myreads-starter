import React from "react";
import {Link} from "react-router-dom";
import BookShelf from "./BookShelf";
import PropTypes from 'prop-types';

function BooksList(props) {
    const {books, onBookShelfChange} = props;

    function booksForShelf(shelf) {
        return books.filter((book) => book.shelf === shelf);
    }

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <BookShelf key='currentlyReading' title='Currently Reading'
                               books={booksForShelf("currentlyReading")} onBookShelfChange={onBookShelfChange} />
                    <BookShelf key='wantToRead' title='Want to Read'
                               books={booksForShelf("wantToRead")} onBookShelfChange={onBookShelfChange} />
                    <BookShelf key='read' title='Read'
                               books={booksForShelf("read")} onBookShelfChange={onBookShelfChange} />
                </div>
            </div>
            <div className="open-search">
                <Link className='button' to='/search'>Add a book</Link>
            </div>
        </div>
    )
}

BooksList.propTypes = {
    books: PropTypes.array.isRequired,
    onBookShelfChange: PropTypes.func.isRequired,
}

export default BooksList;