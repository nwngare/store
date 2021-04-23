import React, { useEffect, useState } from 'react';
import client from '../client';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Navigation from '../components/Navigation';
import BookCard from '../components/BookCard';
import Footer from '../components/Footer';

function Home() {

    /**
     * Set up state variables
     */
    const [books, setBooks] = useState([]);
    const [navLinks, setNavLinks] = useState({});
    const [totalPages, setTotalPages] = useState(0);

    /**
     * Load the page content with an HTTP GET request to the backend rest api
     */
    useEffect(() => {
        client({ method: 'GET', path: '/api/books?size=16' }).done(response => {
            setBooks(response.entity._embedded.books);
            setNavLinks(response.entity._links);
            setTotalPages(response.entity.page.totalPages);
        });
    }, []);

    /**
     * Update the page content with the previous or next page links provided by the rest api
     */ 
    function onNavigate(uri) {
        client({ method: 'GET', path: uri }).done(response => {
            setBooks(response.entity._embedded.books);
            setNavLinks(response.entity._links);
            setTotalPages(response.entity.page.totalPages);
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
            <BookCard book={book} />
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
                <Container maxWidth="lg">
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
                </Container>
            </main>
            <Box>
                <Footer />
            </Box>
        </React.Fragment >
    );

}

export default Home;