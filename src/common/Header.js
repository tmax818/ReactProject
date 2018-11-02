import React from "react";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          Flash Study
        </a>
        <ul className="navbar-nav">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {"|"}
          <li>
            <NavLink to="/topics">Topics</NavLink>
          </li>
          {"|"}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
