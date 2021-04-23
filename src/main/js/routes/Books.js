import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import client from '../client';
import Book from '../components/Book';

function Books() {

	const [book, setBook] = useState({});
	let { title } = useParams();

	useEffect(() => {
		client({ method: 'GET', path: `/api/books/search/title?title=${title}` }).done(response => {
			console.log(response.entity);
			setBook(response.entity);
		});
	}, []);

	return (
		<Book title={book.title} />
	);

}

export default Books;