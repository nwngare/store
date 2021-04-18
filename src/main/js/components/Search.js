'use strict';

import React from 'react';

function Search(props) {
    return (
        <form className="d-flex">
            <select name="search-category" id="search-category-select" className="custom-select">
                <option value="author">Author</option>
                <option value="genre">Genre</option>
                <option value="title">Title</option>
            </select>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    );
}

export default Search;