import React from 'react';
import {Link} from "react-router-dom";

const Menu = (props) => {

    function changeShowMenu() {
        props.setShowMenu(false)
    }

    return (
        <menu>
                <ul onClick={changeShowMenu}>
                    <li><Link to='/html'>HTML</Link></li>
                    <li><Link to='/css'>CSS</Link></li>
                    <li><Link to='/js'>JavaScript</Link></li>
                    <li><Link to='/vue'>Vue</Link></li>
                    <li><Link to='/react'>React</Link></li>
                    <li><Link to='/'>Домашняя страница</Link></li>
                </ul>
        </menu>
    );
};

export default Menu;
