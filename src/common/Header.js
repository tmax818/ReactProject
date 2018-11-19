import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = props => {
  return (
    <nav className="ui pointing menu">
      <div className="container">
        <a href="/" className="active item">
          Flash Study
        </a>
        <NavLink className="item" to="/">
          Home
        </NavLink>
        <NavLink className="item" to="/topics">
          Topics
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
