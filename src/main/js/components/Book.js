'use strict';

import React from 'react';

function Book(props) {
	return (
		<div className="col-3">
			{props.book.title}
		</div>
	);
}

export default Book;