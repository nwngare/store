import React, { useState, useEffect } from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';
import Layout from '../components/layout/Layout';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Checkout() {

    const [clientSecret, setClientSecret] = useState({});
    const [error, setError] = useState();

    // retrieve clientSecret from Stripe Payment Intent on page render
    useEffect(() => {
        const fetchClientSecret = () => {
            axios.post("/create-payment-intent", {
                paymentMethodType: "card",
                currency: "usd",
                amount: 1.50 * 100,
            })
            .then((response) => {
                setClientSecret(response.data.clientSecret);
            })
            .catch((error) => {
                // handle error
                setError(error);
            });
        };
        fetchClientSecret();
    }, []);

    /*
    const stripe = useStripe();
    const element = useElements();

    const handleSubmit = async (event) => {
        
        event.preventDefault();

        // check to make sure stripe and elements instance have loaded
        // if not do not allow submit
        if (!stripe || !element) {
            return;
        }

        // request a payment intent
        const { data: clientSecret } = await axios.post("/stripe_api/payment_intents", {
            amount: 1.50 * 100,

        });

        console.log(clientSecret);

        
        const cardElement = element.getElement(CardElement);

        const { error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }
        
    };*/

    const cardElementOptions = {
        hidePostalCode: true  
    };

    return (
        <Layout>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGroupFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGroupLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupAddress">
                    <Form.Label>Street Address</Form.Label>
                    <Form.Control type="text" placeholder="Street Address" />
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGroupCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="City" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGroupState">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" placeholder="State" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGroupZipCode">
                        <Form.Label>Zip Code</Form.Label>
                        <Form.Control type="text" placeholder="Zip Code" />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formGroupPayment">
                    <CardElement options={cardElementOptions} />
                </Form.Group>
            </Form>
        </Layout>
    );
}

export default Checkout;