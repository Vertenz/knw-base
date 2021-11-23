import React from 'react';
import {Link} from "react-router-dom";

const Menu = (props) => {

    function changeShowMenu() {
        props.setShowMenu(false)
    }

    return (
        <menu className={props.showMenu ? "menu menu_active" : "menu"}>
                <div className="cross" onClick={changeShowMenu}>
                    <div className="cross__first" />
                    <div className="cross__second" />
                </div>
                <ul className={'menu__ul'} onClick={changeShowMenu}>
                    <li className={'menu__li'}><Link className={'menu__a'} to='/html'>HTML</Link></li>
                    <li className={'menu__li'}><Link className={'menu__a'} to='/css'>CSS</Link></li>
                    <li className={'menu__li'}><Link className={'menu__a'} to='/js'>JavaScript</Link></li>
                    <li className={'menu__li'}><Link className={'menu__a'} to='/vue'>Vue</Link></li>
                    <li className={'menu__li'}><Link className={'menu__a'} to='/react'>React</Link></li>
                    <li className={'menu__li'}><Link className={'menu__a'} to='/'>Домашняя страница</Link></li>
                </ul>
        </menu>
    );
};

export default Menu;
