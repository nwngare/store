'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/Navigation';
import StoreRoom from './components/StoreRoom';
import Footer from './components/Footer';

class App extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="App">
				<Navigation brand="Nick's Bookstore" />
				<main className="container">
					<StoreRoom />
				</main>
				<Footer />
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('react')
)