'use strict';

import React from 'react';
import Search from './Search';
import NavLink from './NavLink';

export default class Navigation extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">{this.props.brand}</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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
}