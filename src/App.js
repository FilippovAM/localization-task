import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {withLocalize} from 'react-localize-redux';
import globalTranslations from './assets/translations/global.json';
import {BrowserRouter, Route} from 'react-router-dom';
import Main from './components/pages/main/main'

import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        const {initialize} = this.props;

        // init localizations
        initialize({
            languages: [
                {name: 'Russian', code: 'ru'},
                {name: 'English', code: 'en'},
            ],
            translation: globalTranslations,
            options: {
                renderToStaticMarkup,
                defaultLanguage: 'en',
            }
        });
    }

    render() {
        return (
            <BrowserRouter>
                <Route exact path="/" component={Main}/>
            </BrowserRouter>
        );
    }
}

export default withLocalize(App);