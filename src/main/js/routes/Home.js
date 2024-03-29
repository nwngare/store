import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import BookCard from '../components/BookCard';
import Layout from '../components/Layout/Layout';

function Home() {
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState([]);
  const [navLinks, setNavLinks] = useState({});
  const [totalPages, setTotalPages] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  // Load products for the home page with an HTTP GET request to the backend rest api
  useEffect(() => {
    const fetchBookData = () => {
      axios
        .get("/api/books?size=16")
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
    };
    fetchBookData();
  }, []);

  // Load the book genres with an HTTP GET request to the backend rest api
  useEffect(() => {
    const fetchGenreData = () => {
      axios
        .get("/api/genres")
        .then((response) => {
          setGenres(response.data._embedded.genres);
        })
        .catch((error) => {
          // handle error
          setError(error);
        });
    };
    fetchGenreData();
  }, []);

  // Update the page content with the previous or next page links provided by the rest api
  function onNavigate(uri) {
    setLoading(true);
    axios
      .get(uri)
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

  function getBooksByGenre(uri) {
    onNavigate(uri);
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
  const bookCards = books.map((book) => (
    <Col key={book._links.self.href} className="mb-4">
      <BookCard key={book.id} book={book} />
    </Col>
  ));
  // const bookCards = books.map((book) => (
  //   <BookCard key={book.id} book={book} />
  // ));

  // Create a list of Genres to display in the aside
  const genreLinks = genres.map((genre) => (
    <li>
      <a key={genre.id} href="#" onClick={() => getBooksByGenre("http://localhost:8080/api/books/search/findByGenresId?Id=" + genre.id + "&size=16")}>{genre.genre}</a>
    </li>
  ));

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
    nextButton = <Button disabled>Next</Button>;
  }

  return (
    <Layout>
      {loading ? (
        <Row
          xs="auto"
          className="justify-content-center"
          style={{ height: "100vh" }}
        >
          <Col>
            <div className="d-flex">
              <Spinner animation="border" variant="primary" role="status" />
            </div>
          </Col>
        </Row>
      ) : (
        <Container className="d-flex">
          <Row xs="auto">
            <Col sm={12} md={3}>
              <h2>Genres</h2>
              <ul>
                {genreLinks}
              </ul>
            </Col>
            <Col sm={12} md={9}>
              <Row sm={1} md={2} lg={4} className="g-4">
                {bookCards}
              </Row>
            </Col>
          </Row>
        </Container>
      )}
      <Row xs="auto" className="justify-content-center">
        <Col>
          <ButtonGroup>
            {prevButton}
            {nextButton}
          </ButtonGroup>
        </Col>
      </Row>
    </Layout>
  );
}

export default Home;
