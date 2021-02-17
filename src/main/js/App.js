'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import client from './client';
import Navigation from './components/Navigation';
import AuthorList from './components/AuthorList';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {authors: []};
	}

	componentDidMount() {
		client({method: 'GET', path: '/api/authors'}).done(response => {
			this.setState({authors: response.entity._embedded.authors});
		});
	}

	render() {
		return (
			<Navigation brand="Nick's Bookstore" />
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('react')
)