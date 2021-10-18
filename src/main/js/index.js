import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe('pk_test_51JcgHBJRmn9rXA5r0VKMLomNOUriGP7dekjlHhQd6OyrG9KgStWFjCDyx1WUIC4EMjwYmBPDmC50CjunddMmahCT00jyQnNNOQ');

ReactDOM.render((
	<Provider store={store}>
		<Elements stripe={stripePromise}>
			<HashRouter>
				<App />
			</HashRouter>
		</Elements>
	</Provider>
), document.getElementById('react'));