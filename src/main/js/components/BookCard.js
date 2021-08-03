import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import { cartItemAdded } from '../features/cart/cartSlice';
import AddToCart from './AddToCart';
import stockImage from '../../resources/static/images/pexels-pixabay-267586.jpg';

const useStyles = makeStyles((theme) => ({
	root: {
		width: 275,
	},
	media: {
		height: "150px",
	}
}));

function BookCard(props) {
	const classes = useStyles();
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
		<Card className={classes.root}>
			<CardMedia
				className={classes.media}
				image={stockImage}
				title="Stock Image"
			/>
			<CardContent>
				<Typography noWrap variant="h6">
					<Link to={{ pathname: `/productdetails/${props.book.title}` }}>
						{props.book.title}
					</Link>
				</Typography>
				<Typography paragraph>
					by {typeof primaryAuthor !== 'undefined' ? primaryAuthor : (primaryAuthor = "No Author")}
				</Typography>
			</CardContent>
			<CardActions>
				<AddToCart variant="contained" color="primary" size="small" onClick={onAddToCartClicked} />
			</CardActions>
		</Card>
	);
}

export default BookCard;