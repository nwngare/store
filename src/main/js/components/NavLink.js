'use strict';

import React from 'react';

function NavLink(props) {
    if (props.label === 'Cart') {
        return (
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <i className="fas fa-shopping-cart"></i>
                </a>
            </li>
        );
    }

    return (
        <li className="nav-item">
            <a className="nav-link" href="#">{props.label}</a>
        </li>
    );
}

export default NavLink;