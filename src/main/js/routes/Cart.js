import React, { useState } from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navigation from '../components/Navigation';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import CartItem from '../components/CartItem';
import Footer from '../components/Footer';

import { useSelector } from 'react-redux';

import { selectAllCartItems } from '../features/cart/cartSlice';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: "50px",
        minHeight: "100vh"
    },
    footer: {
        height: "50px",
        padding: "7px 0px 0px 20px",
        position: "fixed",
        bottom: 0
    }
}));

function Cart() {

    const classes = useStyles();

    const [loading, setLoading] = useState(true);

    const cartItems = useSelector(selectAllCartItems);

    const renderedCartItems = cartItems.map(cartItem => (
        <CartItem key={cartItem.cartItemId} cartItem={cartItem} />
    ));

    return (
        <React.Fragment>
            <CssBaseline />
            <Navigation />
            <main>
                <Container maxWidth="md" className={classes.container}>
                    {renderedCartItems}
                </Container>
            </main>
            <Box>
                <Footer className={classes.footer} />
            </Box>
        </React.Fragment >
    );
}

export default Cart;