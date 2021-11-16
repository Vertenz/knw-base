import React, {useState} from 'react';
import {Route, Switch} from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu";
import Home from "./Home";
import About from "./About";
import Info from "./Info";
import Footer from "./Footer";

const LayoutWrap = () => {
    let [showMenu, setShowMenu] = useState(false);

    return (
        <div>
            <Header setShowMenu={setShowMenu} showMenu={showMenu}/>
            {showMenu && <Menu setShowMenu={setShowMenu} showMenu={showMenu}/>}
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
            <Footer />
        </div>
    );
};

export default LayoutWrap;
