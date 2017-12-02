import React from 'react';
import './Header.css';
import logo from './img/modest.png';

class Header extends React.Component {
  render() {
    return (
      <div className="header" id="nav">
        <header className="header__container">
          <a href="#about">
            <img src={logo} alt="Modest logo" />
          </a>
          <nav className="header__menu">
            <ul>
              <li><a className="menu__link active" href="#promo-section"> home </a></li>
              <li><a className="menu__link" href="#about"> about </a></li>
              <li><a className="menu__link" href="#work"> work </a></li>
              <li><a className="menu__link" href="#team"> team </a></li>
              <li><a className="menu__link" href="#services"> services </a></li>
              <li><a className="menu__link" href="#features"> features </a></li>
              <li><a className="menu__link" href="#contact"> contact </a></li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
