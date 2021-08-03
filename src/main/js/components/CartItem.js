import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import RemoveFromCart from '../components/RemoveFromCart';
import { cartItemRemoved, cartItemQuantityAdjusted } from '../features/cart/cartSlice';
import stockImage from '../../resources/static/images/pexels-pixabay-267586.jpg';

function CartItem(props) {

    const dispatch = useDispatch();

    const onRemoveFromCartClicked = (id) => {
        dispatch(cartItemRemoved(id));
    }

    const onQuantityChanged = (event) => {
        dispatch(
            cartItemQuantityAdjusted({
                cartItemId: props.cartItem.cartItemId,
                quantity: event.target.value
            }));
    }

    return (
        <Paper>
            <Grid container justify="center" spacing={2}>
                <Grid item xs={12} md={6}>
                    <Grid container justify="center">
                        <img src={stockImage} />
                    </Grid>
                </Grid>
                <Grid container item alignItems="flex-start" xs={12} md={6}>
                    <Grid item xs={12}>
                        <Typography paragraph variant="h6">
                            {props.cartItem.name}
                        </Typography>
                        <Typography>
                            <label>Quantity: </label>
                            <input type="number" min="1" value={props.cartItem.quantity} onChange={onQuantityChanged} />
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <RemoveFromCart variant="contained" color="secondary" size="small" onClick={() => onRemoveFromCartClicked(props.cartItem.cartItemId)} />
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default CartItem;