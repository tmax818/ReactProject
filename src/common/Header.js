import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = props => {
  return (
    <div className="ui tabular menu">
      <div className="container">
        <div className="right menu">
          <NavLink className="item" to="/">
            Home
          </NavLink>
          <NavLink className="item" to="/topics">
            Topics
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
