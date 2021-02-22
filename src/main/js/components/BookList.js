'use strict';

import React from 'react';
import client from '../client';
import Book from './Book';
import AddToCart from './AddToCart';

class BookList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
        }
    }

    componentDidMount() {
		client({method: 'GET', path: '/api/books?size=16'}).done(response => {
			this.setState({books: response.entity._embedded.books});
		});
	}

    render() {
        return (
            <div className="row">
                {this.state.books.map(book => (
                <Book key={book._links.self.href} book={book} />
                ))}
			</div>
        );
    }
}

export default BookList;