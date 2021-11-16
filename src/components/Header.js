import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const Header = (props) => {

    function changeShowMenu() {
        props.setShowMenu(!props.showMenu)
    }

    return (
        <header className='app-header'>
            <div className="app-header__start">
                <div className="menu-button"
                     onClick={changeShowMenu}>
                    <div className="menu-button__line"/>
                    <div className="menu-button__line"/>
                    <div className="menu-button__line"/>
                </div>
            </div>
            <div className="app-header__center">
                <Link to="/"><strong className="logo">Frontend <span
                    className='attention'>Knowledge</span> Base</strong></Link>
            </div>
            <div className="app-header__end">
                <img src="#" alt="поиск" className="search"/>
            </div>
        </header>
    );
};


Header.propTypes = {
    setShowMenu: PropTypes.func,
    showMenu: PropTypes.bool
};

export default Header;
