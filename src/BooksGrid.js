import React, {Component} from "react";
import Book from "./Book";

class BooksGrid extends Component {
    render() {
        const {books} = this.props;

        return (
            <ol className="books-grid">
                {books.length > 0 ? books.map(book => (
                    <li key={book.id}><Book book={book} /></li>
                )) : <p>No books was found</p>}
            </ol>
        )
    }
}

export default BooksGrid;