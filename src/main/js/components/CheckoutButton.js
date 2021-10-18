import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function CheckoutButton() {
    let history = useHistory();

    function handleClick() {
        history.push("/checkout")
    }

    return <Button onClick={handleClick}>Checkout</Button>
}

export default CheckoutButton;