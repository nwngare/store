import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';
import { selectAllCartItems, selectTotalPrice } from '../features/cart/cartSlice';
import axios from 'axios';
import Layout from '../components/layout/Layout';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function Checkout() {

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        streetAddress: '',
        city: '',
        state: '',
        zipCode: ''
    });

    const cartItems = useSelector(selectAllCartItems);
    const totalPrice = useSelector(selectTotalPrice);

    const tableRowCartItems = cartItems.map(cartItem => (
        <tr key={cartItem.cartItemId}>
            <td>{cartItem.name}</td>
            <td>{cartItem.quantity}</td>
            <td>{cartItem.price}</td>
        </tr>
    ));

    const handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        setValues({...values, [name]: value});
    }

    const stripe = useStripe();
    const element = useElements();

    const handleSubmit = async (event) => {
        
        event.preventDefault();

        // check to make sure stripe and elements instance have loaded
        // if not, then do not allow submit
        if (!stripe || !element) {
            return;
        }

        try {
        // request a payment intent
        const { data: clientSecret } = await axios.post("/create-payment-intent", {
            paymentMethodType: "card",
            currency: "usd",
            amount: totalPrice * 100,
        });

        console.log(clientSecret);

        
        const cardElement = element.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
            billing_details: {
                name: values.firstName + ' ' + values.lastName,
                email: values.email,
                address: {
                    line1: values.streetAddress,
                    city: values.city,
                    state: values.state,
                    postal_code: values.zipCode
                }
            }
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }

        const confirmedCardPayment = await stripe.confirmCardPayment(clientSecret.clientSecret, {
            payment_method: paymentMethod.id
        });

        console.log(confirmedCardPayment);

    } catch(error) {
        console.log(error);
    }
        
    };

    
    const cardElementOptions = {
        hidePostalCode: true  
    };

    return (
        <Layout>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGroupFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" value={values.firstName} name="firstName" onChange={handleInputChange} placeholder="First Name" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGroupLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" value={values.lastName} name="lastName" onChange={handleInputChange} placeholder="Last Name" />
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={values.email} name="email" onChange={handleInputChange} placeholder="Email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupAddress">
                            <Form.Label>Street Address</Form.Label>
                            <Form.Control type="text" value={values.streetAddress} name="streetAddress" onChange={handleInputChange} placeholder="Street Address" />
                        </Form.Group>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGroupCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" value={values.city} name="city" onChange={handleInputChange} placeholder="City" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGroupState">
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" value={values.state} name="state" onChange={handleInputChange} placeholder="State" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGroupZipCode">
                                <Form.Label>Zip Code</Form.Label>
                                <Form.Control type="text" value={values.zipCode} name="zipCode" onChange={handleInputChange} placeholder="Zip Code" />
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3" controlId="formGroupPayment">
                            <CardElement options={cardElementOptions} />
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Col>
                <Col>
                    <Table bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableRowCartItems}
                            <tr>
                                <td>Total:</td>
                                <td></td>
                                <td>{totalPrice}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Layout>
    );
}

export default Checkout;