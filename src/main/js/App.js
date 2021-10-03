import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './routes/Home';
import ProductDetails from './routes/ProductDetails';
import Cart from './routes/Cart';
import Checkout from './routes/Checkout';

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
				<Route exact path="/cart">
					<Cart />
				</Route>
				<Route path="/checkout">
					<Checkout />
				</Route>
			</Switch>
		</div>
	);
}

export default App;