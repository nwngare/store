import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import AddToCart from '../components/AddToCart';
import { cartItemAdded, cartItemRemoved } from '../features/cart/cartSlice';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
import Navigation from '../components/Navigation';
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
		<React.Fragment>
			<Navigation />
			<Container className="mt-4 mb-4">
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
                                <AddToCart variant="contained" size="small" onClick={onAddToCartClicked} />
                            </Card.Body>
						</Col>
					</Row>
				</Card>
                )}
			</Container>
		</React.Fragment >
	);
}

export default ProductDetails;