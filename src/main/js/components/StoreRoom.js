'use strict';

import React from 'react';
import BookList from './BookList';

function StoreRoom(props) {
    return (
        <div className="container">
			<BookList />
		</div>
    );
}

export default StoreRoom;