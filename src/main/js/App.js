import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './routes/Home';
import ProductDetails from './routes/ProductDetails';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/productdetails/:title">
					<ProductDetails />
				</Route>
			</Switch>
		</div>
	);
}

export default App;