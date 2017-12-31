import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = (props) => {
  const items = props.navbarItems.map(item => {
    return (
      <li key={uuid.v4()}>
        <Link
          to={item.path}
          className={
            item.active
            ? "menu__link active"
            : "menu__link"
          }
        >
          {item.text}
        </Link>
      </li>
    );
  });

  return (
    <nav className="header__menu">
      <ul>
        {items}
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  navbarItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired,
    })
  ).isRequired,
}

export default Navbar;




