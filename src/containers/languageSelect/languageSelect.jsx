import React from 'react';
import {Component} from 'react';
import {Select} from '../../components/select/select';
import {withLocalize} from 'react-localize-redux';
import propTypes from 'prop-types';

import './languageSelect.css';

class LanguageSelect extends Component {
    render() {
        const {languages} = this.props;
        let activeCode = '';
        const options = languages.map((lang) => {
            if (lang.active) {
                activeCode = lang.code;
            }
            return {title: lang.name, value: lang.code};
        });

        return (
            <Select options={options}
                    value={activeCode}
                    className='language-select'
                    onChange={this.onChange}
            />
        );
    }

    onChange = (e) => {
        const value = e.currentTarget.value;
        this.props.setActiveLanguage(value);
    }
}

LanguageSelect.propTypes = {
    languages: propTypes.arrayOf(propTypes.shape({
        active: propTypes.bool,
        name: propTypes.string,
        code: propTypes.string
    })),
};

export default withLocalize(LanguageSelect);