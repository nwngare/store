import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import BookCard from '../components/BookCard';
import Navigation from '../components/Navigation';

function Home() {
  const [books, setBooks] = useState([]);
  const [navLinks, setNavLinks] = useState({});
  const [totalPages, setTotalPages] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  /**
   * Load the page content with an HTTP GET request to the backend rest api
   */
  useEffect(() => {
    const fetchData = () => {
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
    <Col key={book._links.self.href}>
        <BookCard key={book.id} book={book} />
    </Col>
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
      <Navigation />
      <Container className="mt-4 mb-4">
              {loading ? (
                  <Row xs="auto" className="justify-content-center" style={{height: '100vh'}}>
                  <Col>
                  <div className="d-flex">
                      <Spinner animation="border" variant="primary" role="status" />
                  </div>
                  </Col>
                  </Row>
              ) : (
              <Row xs="auto" className="justify-content-center g-4 mb-4">
                {bookCards}
              </Row>
              )}
              <Row xs="auto" className="justify-content-center">
                  <Col>
            <ButtonGroup>
              {prevButton}
              {nextButton}
            </ButtonGroup>
            </Col>
            </Row>
      </Container>
    </React.Fragment>
  );
}

export default Home;