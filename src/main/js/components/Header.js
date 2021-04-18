'use strict';

import React from 'react';
import Navigation from './Navigation';

function Header(props) {
    return (
        <header>
			<h1>Nick's Bookstore</h1>
			<Navigation brand="Nick's Bookstore" />
		</header>
    );
}