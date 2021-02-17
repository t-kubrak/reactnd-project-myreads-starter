import React from "react";
import BooksGrid from "./BooksGrid";
import PropTypes from 'prop-types';

function BookShelf(props) {
    const {books, title, onBookShelfChange} = props;

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <BooksGrid books={books} onBookShelfChange={onBookShelfChange} />
            </div>
        </div>
    )
}

BookShelf.propTypes = {
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    onBookShelfChange: PropTypes.func.isRequired,
}

export default BookShelf;