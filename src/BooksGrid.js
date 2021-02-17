import React from "react";
import Book from "./Book";
import PropTypes from 'prop-types';

function BooksGrid(props) {
    const {books, onBookShelfChange} = props;

    return (
        <ol className="books-grid">
            {books.length > 0 ? books.map(book => (
                <li key={book.id}><Book book={book} onBookShelfChange={onBookShelfChange} /></li>
            )) : <p>No books was found</p>}
        </ol>
    )
}

BooksGrid.propTypes = {
    books: PropTypes.array.isRequired,
    onBookShelfChange: PropTypes.func.isRequired,
}

export default BooksGrid;