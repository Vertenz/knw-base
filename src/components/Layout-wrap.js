import React, {useEffect, useState} from 'react';
import {Route, Switch} from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu";
import Home from "./Home";
import About from "./About";
import Info from "./Info";
import Footer from "./Footer";

const LayoutWrap = () => {
    let [showMenu, setShowMenu] = useState(false);
    let [isSmall, setIsSmall] = useState(false)

    function checkClientWidth() {
        const width = window.innerWidth
        if (width < 450) {
            setIsSmall(true)
            return true
        }
        return false
    }

    useEffect(() => {
        checkClientWidth()
    }, [])

    function changeShowMenu() {
        setShowMenu(false)
    }

    return (
        <div>
            <Header setShowMenu={setShowMenu} showMenu={showMenu} isSmallSize={isSmall}/>
            {/*{showMenu && <Menu setShowMenu={setShowMenu} showMenu={showMenu}/>}*/}
            <Menu setShowMenu={setShowMenu} showMenu={showMenu} />
            <div onClick={changeShowMenu}>
                <Switch>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path={["/html", "/css", "/js", "/vue", '/react']}>
                        <Info/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
            <Footer/>
        </div>
    );
};

export default LayoutWrap;
