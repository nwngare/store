'use strict';

import React from 'react';
import Search from './Search';
import NavLink from './NavLink';

function Navigation(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.brand}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink label="Home" />
                        <NavLink label="Sign in" />
                        <NavLink label="Cart" />
                    </ul>
                    <Search />
                </div>
            </div>
        </nav>
    );
}

export default Navigation;