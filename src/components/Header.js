import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import Search from "./UI/Search";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Header = (props) => {

    let [showSmallSearch, setShowSmallSearch] = useState(false)

    function changeShowMenu() {
        props.setShowMenu(!props.showMenu)
    }

    function changeShowSmallSearch() {
        setShowSmallSearch(true)
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
                {props.isSmallSize ?
                    <div> {!showSmallSearch && <FontAwesomeIcon icon={["fab", "searchengin"]} size="lg" onClick={changeShowSmallSearch}
                                          className={"search-block_small"}/>}
                        {showSmallSearch &&
                        <Search setShowMenu={props.setShowMenu}/>}</div> : <Search setShowMenu={props.setShowMenu}/>}
            </div>
        </header>
    );
};


Header.propTypes = {
    setShowMenu: PropTypes.func,
    showMenu: PropTypes.bool,
    isSmallSize: PropTypes.bool
};

export default Header;
