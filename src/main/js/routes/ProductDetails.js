import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import AddToCartButton from '../components/AddToCartButton';
import { cartItemAdded } from '../features/cart/cartSlice';
import Layout from '../components/layout/Layout';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
import stockImage from '../../resources/static/images/pexels-pixabay-267586.jpg';

function ProductDetails() {
    
    const [bookData, setBookData] = useState({});
	const [loading, setLoading] = useState(true);
	let { title } = useParams();

	useEffect(() => {
		const fetchData = () => {
			axios.get(`/api/books/search/title?title=${title}`)
				.then((response) => {
					setBookData(response.data);
					setLoading(false);
				})
				.catch((error) => {
					// handle error
					setError(error);
				});
		}
		fetchData();
	}, []);

	const dispatch = useDispatch();

	const onAddToCartClicked = () => {
		if (bookData) {
			dispatch(
				cartItemAdded({
					cartItemId: bookData.id,
					name: bookData.title,
					price: '10.99',
					quantity: 1
				})
			);
		}
	}

	return (
		<Layout>
                {loading ? (
                <Row xs="auto" className="justify-content-center">
                    <Col>
                        <div className="d-flex">
                            <Spinner animation="border" variant="primary" role="status" />
                        </div>
                    </Col>
                </Row>
				) : (
                <Card key={bookData.id} className="mb-3">
                    <Row>
                        <Col md={4}>
                            <Card.Img src={stockImage} />
                        </Col>
                        <Col md={8}>
                            <Card.Body>
                                <Card.Title>
                                    {bookData.title}
                                </Card.Title>
                                <Card.Text>
                                    by {bookData.authors[0].firstName} {bookData.authors[0].lastName}
                                </Card.Text>
                                <AddToCartButton variant="primary" size="small" onClick={onAddToCartClicked} />
                            </Card.Body>
						</Col>
					</Row>
				</Card>
                )}
		</Layout>
	);
}

export default ProductDetails;