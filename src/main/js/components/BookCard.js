import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { cartItemAdded } from '../features/cart/cartSlice';
import AddToCartButton from './AddToCartButton';
import stockImage from '../../resources/static/images/pexels-pixabay-267586.jpg';

function BookCard(props) {
	const primaryAuthor = props.book.authors[0].firstName + " " + props.book.authors[0].lastName;

	const dispatch = useDispatch();

	const onAddToCartClicked = () => {
		if (props.book) {
			dispatch(
				cartItemAdded({
					cartItemId: props.book.id,
					name: props.book.title,
					price: '10.99',
					quantity: 1
				})
			);
		}
	}

	return (

<Card className="mx-auto" style={{ width: '14rem', height: '16rem' }}>
<Card.Img variant="top" src={stockImage} />
<Card.Body>
  <Card.Title className="fs-6 text-truncate">
	  <Link to={{ pathname: `/productdetails/${props.book.title}` }}>
		  {props.book.title}
	  </Link>
  </Card.Title>
  <Card.Text className="fs-6 text-truncate">
  by {typeof primaryAuthor !== 'undefined' ? primaryAuthor : (primaryAuthor = "No Author")}
  </Card.Text>
  <AddToCartButton variant="primary" size="small" onClick={onAddToCartClicked} />
</Card.Body>
</Card>
	);
}

export default BookCard;