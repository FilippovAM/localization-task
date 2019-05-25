import React from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import propTypes from 'prop-types';

import './navbar.css';

export const NavbarItem = (props) => {
    const classes = classNames('navbar__item', props.className);
    return (
        <li className={classes}>
            {props.link ? (
                <Link to={props.link} className="navbar__link">
                    {props.children}
                </Link>
            ) : (
                <span className="navbar__link">
                    {props.children}
                </span>
            )}
        </li>
    );
};

NavbarItem.propTypes = {
    className: propTypes.string,
    link: propTypes.string,
    children: propTypes.element,
};
