import React from 'react';
import {Translate} from 'react-localize-redux';
import LanguageSelect from '../../../containers/languageSelect/languageSelect';
import {Navbar} from '../../navbar/navbar';
import {NavbarItem} from '../../navbar/navbarItem';

import './main.css';

export default class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <Navbar>
                    <NavbarItem link="/">
                        <Translate id="menu.main"/>
                    </NavbarItem>
                    <NavbarItem link="/offers">
                        <Translate id="menu.offers"/>
                    </NavbarItem>
                    <NavbarItem link="/support">
                        <Translate id="menu.support"/>
                    </NavbarItem>
                    <NavbarItem link="/profile">
                        <Translate id="menu.profile"/>
                    </NavbarItem>
                    <NavbarItem className="navbar__item_language-select navbar__item_prevent-hover">
                        <LanguageSelect/>
                    </NavbarItem>
                </Navbar>
            </div>
        );
    }
}