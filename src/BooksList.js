import React, {Component} from "react";
import {Link} from "react-router-dom";
import BookShelf from "./BookShelf";

class BooksList extends Component {
    booksForShelf(shelf) {
        const {books} = this.props;
        return books.filter((book) => book.shelf === shelf);
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf key='currentlyReading' title='Currently Reading' books={this.booksForShelf("currentlyReading")} />
                        <BookShelf key='wantToRead' title='Want to Read' books={this.booksForShelf("wantToRead")} />
                        <BookShelf key='read' title='Read' books={this.booksForShelf("read")} />
                    </div>
                </div>
                <div className="open-search">
                    <Link className='button' to='/search'>Add a book</Link>
                </div>
            </div>
        )
    }
}

export default BooksList;