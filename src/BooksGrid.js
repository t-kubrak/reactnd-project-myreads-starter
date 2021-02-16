import React, {Component} from "react";
import Book from "./Book";
import PropTypes from 'prop-types';

class BooksGrid extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onBookShelfChange: PropTypes.func.isRequired,
    }

    render() {
        const {books, onBookShelfChange} = this.props;

        return (
            <ol className="books-grid">
                {books.length > 0 ? books.map(book => (
                    <li key={book.id}><Book book={book} onBookShelfChange={onBookShelfChange} /></li>
                )) : <p>No books was found</p>}
            </ol>
        )
    }
}

export default BooksGrid;