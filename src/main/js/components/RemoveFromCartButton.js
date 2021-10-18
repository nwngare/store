import React from 'react';
import Button from 'react-bootstrap/Button';

function RemoveFromCartButton(props) {
    return <Button variant={props.variant} size={props.size} onClick={props.onClick}>Remove From Cart</Button>;
}

export default RemoveFromCartButton;