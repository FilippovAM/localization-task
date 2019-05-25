import React from 'react';
import propTypes from 'prop-types';

import './navbar.css';

export const Navbar = (props) => {
    return (
        props.children.length ? (
            <ul className="navbar">
                {props.children}
            </ul>
        ) : null
    )
};

Navbar.propTypes = {
    children: propTypes.arrayOf(propTypes.element),
};