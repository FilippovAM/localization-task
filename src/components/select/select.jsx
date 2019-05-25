import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';

import './select.css';

export const Select = (props) => {
    const {options = [], ...selectProps} = props;
    const classes = classNames('select', selectProps.className);

    return (
        options.length ? (
            <select {...selectProps} className={classes}>
                {options.map(({title, value}) => (
                    <option value={value} key={title}>{title}</option>
                ))}
            </select>
        ) : null
    );
};

Select.propTypes = {
    options: propTypes.arrayOf(
        propTypes.shape({
            title: propTypes.string,
            value: propTypes.string,
        })),
    value: propTypes.string,
    className: propTypes.string,
};