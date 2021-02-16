import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksList from './BooksList';
import BooksSearch from './BooksSearch';
import {Route} from 'react-router-dom';

class BooksApp extends React.Component {
    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState(() => ({books}))
        })
    }

    onBookShelfChange = (book, shelf) => {
        BooksAPI.update(book, shelf).then((response) => {
            let books = this.state.books.map((bookToFind) => {
                if (bookToFind.id === book.id) {
                    bookToFind.shelf = shelf;
                }

                return bookToFind;
            })

            // Get book from API and add it to state if it's not there
            const inBookShelf = this.state.books.find(bookToFind => bookToFind.id === book.id);
            if (!inBookShelf) {
                BooksAPI.get(book.id).then(book => books.push(book));
            }

            this.setState(() => ({books}))
        })
    }

    render() {
        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    <BooksList onBookShelfChange={this.onBookShelfChange} books={this.state.books} />
                )}/>
                <Route path='/search' render={({history}) => (
                    <BooksSearch onBookShelfChange={this.onBookShelfChange} shelfBooks={this.state.books} />
                )}/>
            </div>
        )
    }
}

export default BooksApp
