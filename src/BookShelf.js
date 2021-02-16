import React, {Component} from "react";
import BooksGrid from "./BooksGrid";
import PropTypes from 'prop-types';

class BookShelf extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        title: PropTypes.string.isRequired,
        onBookShelfChange: PropTypes.func.isRequired,
    }

    render() {
        const {books, title, onBookShelfChange} = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <BooksGrid books={books} onBookShelfChange={onBookShelfChange} />
                </div>
            </div>
        )
    }
}

export default BookShelf;