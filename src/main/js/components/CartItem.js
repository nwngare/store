import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RemoveFromCartButton from './RemoveFromCartButton';
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
        <Card className="mb-3" key={props.cartItem.cartItemId}>
            <Row>
                <Col md={4}>
                    <Card.Img src={stockImage} />
                </Col>
                <Col md={8}>
                    <Card.Body>
                        <Card.Title>{props.cartItem.name}</Card.Title>
                        <Card.Text>
                            <label>Quantity: </label>
                            <input type="number" min="1" value={props.cartItem.quantity} onChange={onQuantityChanged} />
                        </Card.Text>
                        <RemoveFromCartButton variant="contained" size="small" onClick={() => onRemoveFromCartClicked(props.cartItem.cartItemId)} />
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
}

export default CartItem;