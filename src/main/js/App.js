import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './routes/Home';
import Books from './routes/Books';

function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/books/:title">
					<Books />
				</Route>
			</Switch>
		</div>
	);
}

export default App;