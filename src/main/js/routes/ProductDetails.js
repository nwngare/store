import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import makeStyles from '@material-ui/styles/makeStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Navigation from '../components/Navigation';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Footer from '../components/Footer';
import stockImage from '../../resources/static/images/pexels-pixabay-267586.jpg';

const useStyles = makeStyles((theme) => ({
	container: {
		paddingTop: "50px",
		minHeight: "100vh"
	},
	footer: {
		height: "50px",
		padding: "7px 0px 0px 20px",
		position: "fixed",
		bottom: 0
	}
}));

function ProductDetails() {

	const classes = useStyles();

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

	return (
		<React.Fragment>
			<CssBaseline />
			<Navigation />
			<main>
				<Container maxWidth="md" className={classes.container}>
					{loading ? (
						<Grid container justify="center">
							<Grid item>
								<CircularProgress />
							</Grid>
						</Grid>
					) : (
						<Paper>
							<Grid container justify="center" spacing={2}>
								<Grid item xs={12} md={6}>
									<Grid container justify="center">
										<img src={stockImage} />
									</Grid>
								</Grid>
								<Grid container item alignItems="flex-start" xs={12} md={6}>
									<Grid item xs={12}>
										<Typography paragraph variant="h6">
											{bookData.title}
										</Typography>
									</Grid>
									<Grid item xs={12}>
										<Typography paragraph variant="subtitle1">
											by {bookData.authors[0].firstName} {bookData.authors[0].lastName}
										</Typography>
									</Grid>
									<Grid item xs={12}>
										<Button variant="contained" color="primary" size="large">Add to Cart</Button>
									</Grid>
								</Grid>
							</Grid>
						</Paper>
					)}
				</Container>
			</main>
			<Box>
				<Footer className={classes.footer} />
			</Box>
		</React.Fragment >
	);
}

export default ProductDetails;