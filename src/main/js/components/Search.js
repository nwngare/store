'use strict';

import React from 'react';

export default class Search extends React.Component {
    render() {
        return (
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        );
    }
}