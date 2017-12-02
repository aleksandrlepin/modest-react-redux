import React, {Component} from 'react';
import './Footer.css';
import twitter from './img/001-twitter-logo-silhouette.svg';
import facebook from './img/006-facebook-logo.svg';
import skype from './img/009-skype-logo.svg';
import behance from './img/005-behance-logo.svg';
import linkedin from './img/008-linkedin-letters.svg';

class Footer extends React.Component {
    render () {
        return (
            <footer className="color-section color-section--dark">
                <div className="container footer">
                    <p>© Copyright 2014 by PSD Booster. All Rights Reserved.</p>
                    <div className="social">
                        <a href="#">
                            <img src={twitter} alt="twitter"/>
                        </a>
                        <a href="#">
                            <img src={facebook} alt="facebook"/>
                        </a>
                        <a href="#">
                            <img src={skype} alt="skype"/>
                        </a>
                        <a href="#">
                            <img src={behance} alt="behance"/>
                        </a>
                        <a href="#">
                            <img src={linkedin} alt="linkedin"/>
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
