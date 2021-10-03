import React from 'react';
import Navigation from '../Navigation';
import Container from 'react-bootstrap/Container';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe('pk_test_51JcgHBJRmn9rXA5r0VKMLomNOUriGP7dekjlHhQd6OyrG9KgStWFjCDyx1WUIC4EMjwYmBPDmC50CjunddMmahCT00jyQnNNOQ');

function Layout({ children }) {
    return (
        <Elements stripe={stripePromise}>
            <Navigation />
            <Container className="mt-4 mb-4">
                {children}
            </Container>
            <footer style={{ textAlign: 'center' }}>
                &copy; Nicholas Ngare. All rights reserved.
            </footer>
        </Elements>
    );
}

export default Layout;