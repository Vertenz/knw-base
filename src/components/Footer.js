import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = props => {
    return (
        <footer className='footer'>
            <a href="#"><FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" /></a>
            <a href="#"><FontAwesomeIcon icon={['fab', 'github-square']} size="lg" /></a>
        </footer>
    );
};


export default Footer;
