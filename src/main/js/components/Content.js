import React from 'react';
import client from '../client';
import Grid from '@material-ui/core/Grid';
import BookCard from './BookCard';
import Button from '@material-ui/core/Button';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
        this.prevPage = this.prevPage.bind(this);
        this.state = {
            books: [],
            navLinks: {},
            totalPages: 0
        };
    }

    onNavigate(uri) {
        client({method: 'GET', path: uri}).done(response => {
            this.setState({
                books: response.entity._embedded.books,
                navLinks: response.entity._links,
                totalPages: response.entity.page.totalPages
            });
        });
    }

    prevPage(e) {
        e.preventDefault();
        this.onNavigate(this.state.navLinks.prev.href);
    }

    nextPage(e) {
        e.preventDefault();
        this.onNavigate(this.state.navLinks.next.href);
    }

    componentDidMount() {
        client({method: 'GET', path: '/api/books?size=16' }).done(response => {
            this.setState({
                books: response.entity._embedded.books,
                navLinks: response.entity._links,
                totalPages: response.entity.page.totalPages
            });
        });
    }

    render() {
        const books = this.state.books.map(book =>
            <Grid key={book._links.self.href} item>
                <BookCard book={book}/>
            </Grid>
        );
        const totalPages = this.state.totalPages;

        let prevButton;
        if (this.state.navLinks.prev !== undefined) {
            prevButton = <Button variant="contained" onClick={this.prevPage}>Prev</Button>;
        } else {
            prevButton = <Button variant="contained" disabled>Prev</Button>;
        }

        let nextButton;
        if (this.state.navLinks.next !== undefined) {
            nextButton = <Button variant="contained" onClick={this.nextPage}>Next</Button>;
        } else {
            nextButton = <Button variant="contained" disabled>Next</Button>
        }

        return (
            <Grid container justify="center" spacing={4}>
                <Grid item>
                    <Grid container justify="center" spacing={4}>
                        {books}
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container>
				        {prevButton}
                        {nextButton}
                    </Grid>
			    </Grid>
            </Grid>
        );
    }
}

export default Content;