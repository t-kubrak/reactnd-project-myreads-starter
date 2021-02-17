import React, {Component} from "react";
import {Link} from "react-router-dom";
import BooksGrid from "./BooksGrid";
import * as BooksAPI from "./BooksAPI";
import {debounce} from 'debounce';
import PropTypes from "prop-types";

class BooksSearch extends Component {
    static propTypes = {
        onBookShelfChange: PropTypes.func.isRequired,
    }

    state = {
        books: []
    }

    searchBook = debounce((query) => {
        if (!query) {
            this.setState(() => ({
                books: []
            }));
        } else {
            BooksAPI.search(query.trim())
                .then((booksList) => {
                    let books = Array.isArray(booksList) ? booksList : [];

                    // Set the correct shelf in search results
                    books = this.matchBooks(books, this.props.shelfBooks);

                    this.setState(() => ({
                        books: books
                    }));
                })
        }
    }, 700);

    matchBooks(searchResultBooks, shelfBooks) {
        return searchResultBooks.map((book) => {
            const bookInShelf = shelfBooks.find(shelfBook => shelfBook.id === book.id);
            if (bookInShelf) {
                book.shelf = bookInShelf.shelf
            }

            return book;
        })
    }

    handleBookShelfChange(book, shelf) {
        this.props.onBookShelfChange(book, shelf);

        // Persist the shelf in search result
        this.state.books.map((bookToFind) => {
            if (bookToFind.id === book.id) {
                bookToFind.shelf = shelf;
            }

            return bookToFind;
        })
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                          NOTES: The search from BooksAPI is limited to a particular set of search terms.
                          You can find these search terms here:
                          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                          you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input onChange={(e) => {
                            e.persist();
                            this.searchBook(e.target.value)
                        }} type="text" placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                    <BooksGrid books={this.state.books} onBookShelfChange={(book, shelf) => {this.handleBookShelfChange(book, shelf)}} />
                </div>
            </div>
        )
    }
}

export default BooksSearch;