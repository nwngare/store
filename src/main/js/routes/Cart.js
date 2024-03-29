import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllCartItems } from '../features/cart/cartSlice';
import CartItem from '../components/CartItem';
import Layout from '../components/layout/Layout';
import CheckoutButton from '../components/CheckoutButton';

function Cart() {

    const [loading, setLoading] = useState(true);
    const cartItems = useSelector(selectAllCartItems);

    const renderedCartItems = cartItems.map(cartItem => (
        <CartItem key={cartItem.cartItemId} cartItem={cartItem} />
    ));

    return (
        <Layout>
            {renderedCartItems}
            <CheckoutButton />
        </Layout>
    );

}

export default Cart;