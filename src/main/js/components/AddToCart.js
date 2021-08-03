import React from 'react';
import Button from '@material-ui/core/Button';

function AddToCart(props) {
    return (
        <Button variant={props.variant} color={props.color} size={props.size} onClick={props.onClick}>Add to Cart</Button>
    );
}

export default AddToCart;