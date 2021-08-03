import React, { useEffect, useState } from 'react';
import axios from 'axios';
import makeStyles from '@material-ui/styles/makeStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Navigation from '../components/Navigation';
import BookCard from '../components/BookCard';
import Footer from '../components/Footer';

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

function Home() {

    const classes = useStyles();

    /**
     * Set up state variables
     */
    const [books, setBooks] = useState([]);
    const [navLinks, setNavLinks] = useState({});
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    /**
     * Load the page content with an HTTP GET request to the backend rest api
     */
    useEffect(() => {
        const fetchData = () => {
            axios.get('/api/books?size=16')
                .then((response) => {
                    setBooks(response.data._embedded.books);
                    setNavLinks(response.data._links);
                    setTotalPages(response.data.page.totalPages);
                    setLoading(false);
                })
                .catch((error) => {
                    // handle error
                    setError(error);
                });
        }
        fetchData();
    }, []);

    /**
     * Update the page content with the previous or next page links provided by the rest api
     */
    function onNavigate(uri) {
        setLoading(true);
        axios.get(uri)
            .then((response) => {
                setBooks(response.data._embedded.books);
                setNavLinks(response.data._links);
                setTotalPages(response.data.page.totalPages);
                setLoading(false);
            })
            .catch((error) => {
                // handle error
                setError(error);
            });
    }

    function prevPage(e) {
        e.preventDefault();
        onNavigate(navLinks.prev.href);
    }

    function nextPage(e) {
        e.preventDefault();
        onNavigate(navLinks.next.href);
    }

    // Create a grid of cards to display product details
    const bookCards = books.map(book =>
        <Grid key={book._links.self.href} item>
            <BookCard key={book.id} book={book} />
        </Grid>
    );

    /**
     * Create button components to page through products
     * Buttons are only enabled if there is a next or prev link
     * returned by the last call to books rest api endpoint
     */
    let prevButton;
    if (navLinks.prev !== undefined) {
        prevButton = <Button onClick={prevPage}>Prev</Button>;
    } else {
        prevButton = <Button disabled>Prev</Button>;
    }

    let nextButton;
    if (navLinks.next !== undefined) {
        nextButton = <Button onClick={nextPage}>Next</Button>;
    } else {
        nextButton = <Button disabled>Next</Button>
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Navigation />
            <main>
                <Container maxWidth="lg" className={classes.container}>
                    {loading ? (
                        <Grid container justify="center">
                            <Grid item>
                                <CircularProgress />
                            </Grid>
                        </Grid>
                    ) : (
                        <Grid container direction="column" justify="center" spacing={4}>
                            <Grid item>
                                <Grid container justify="center" spacing={4}>
                                    {bookCards}
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid container justify="center">
                                    <Grid item>
                                        <ButtonGroup variant="contained">
                                            {prevButton}
                                            {nextButton}
                                        </ButtonGroup>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    )}
                </Container>
            </main>
            <Box>
                <Footer className={classes.footer} />
            </Box>
        </React.Fragment >
    );
}

export default Home;