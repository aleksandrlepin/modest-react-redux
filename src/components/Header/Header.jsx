import React from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar/Navbar';
import logo from './img/modest.png';
import './Header.css';

class Header extends React.Component {

  render() {
    return (
      <div className="header" id="nav">
        <header className="header__container">
          <a href="#about">
            <img src={logo} alt="Modest logo" />
          </a>
          <Navbar navbarItems={this.props.navbarItems} />
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    navbarItems: state.navbarItems
  }
}

export default connect(mapStateToProps)(Header);
