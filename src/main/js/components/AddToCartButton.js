import React from 'react';
import Button from 'react-bootstrap/Button';

function AddToCartButton(props) {
    return <Button variant={props.variant} size={props.size} onClick={props.onClick}>Add to Cart</Button>;
}

export default AddToCartButton;