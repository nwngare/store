import React from 'react';
import Button from '@material-ui/core/Button';

function RemoveFromCart(props) {
    return (
        <Button variant={props.variant} color={props.color} size={props.size} onClick={props.onClick}>Remove From Cart</Button>
    );
}

export default RemoveFromCart;