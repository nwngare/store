'use strict';

import React from 'react';

export default class NavLink extends React.Component {
    render() {
        return (
            <li class="nav-item">
                <a class="nav-link" href="#">{this.props.label}</a>
            </li>
        );
    }
}