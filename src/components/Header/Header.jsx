import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navbar from './Navbar/Navbar';
import { activeMenu } from '../../action/navbarActions';
import logo from './img/modest.png';
import './Header.css';

class Header extends React.Component {
  render() {
    const { navbarItems, addActive } = this.props;

    return (
      <div className="header" id="nav">
        <header className="header__container">
          <a href="#about">
            <img src={logo} alt="Modest logo" />
          </a>
          <Navbar navbarItems={navbarItems} addActive={addActive} />
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  navbarItems: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  navbarItems: state.navbarItems
});

const mapDispatchToProps = dispatch => ({
  addActive(id) {
    dispatch(activeMenu(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
