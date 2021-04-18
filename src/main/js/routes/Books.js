import React from 'react';
import { useParams } from 'react-router-dom';
import Book from '../components/Book';

function Books() {
	let { title } = useParams()

	return (
		<Book title={title} />
	);
}

export default Books;