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
        BooksAPI.getAll()
            .then((books) => {
                console.log(books);
                this.setState(() => ({books}))
            })
    }

    render() {
        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    <BooksList books={this.state.books} />
                )}/>
                <Route path='/search' render={({history}) => (
                    <BooksSearch/>
                )}/>
            </div>
        )
    }
}

export default BooksApp
