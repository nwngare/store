import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import makeStyles from '@material-ui/styles/makeStyles';

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

	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography noWrap variant="h6">
					<Link to={{pathname: `/books/${props.book.title}`}}>
						{props.book.title}
					</Link>
				</Typography>
				<Typography paragraph>
					by {typeof primaryAuthor !== 'undefined' ? primaryAuthor : (primaryAuthor = "No Author")}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Buy Now</Button>
				<Button size="small">Add to Cart</Button>
			</CardActions>
		</Card>
	);
}

/**
 * <Link to={{ pathname: '/book', state: { title: props.book.title}}}>
		{props.book.title}
	</Link>
 */

export default BookCard;