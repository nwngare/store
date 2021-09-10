import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllCartItems } from '../features/cart/cartSlice';
import CartItem from '../components/CartItem';
import Navigation from '../components/Navigation';
import Container from 'react-bootstrap/Container';

function Cart() {

    const [loading, setLoading] = useState(true);
    const cartItems = useSelector(selectAllCartItems);

    const renderedCartItems = cartItems.map(cartItem => (
        <CartItem key={cartItem.cartItemId} cartItem={cartItem} />
    ));

    return (
        <React.Fragment>
            <Navigation />
            <Container className="mt-4 mb-4">
                {renderedCartItems}
            </Container>
        </React.Fragment >
    );

}

export default Cart;