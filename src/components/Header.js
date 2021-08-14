import React from "react";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <ul className="navigation-menu">
      <li>
        <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink>
      </li>
      <li>
        <NavLink to="/login" activeClassName="active">LogIn</NavLink>
      </li>
      <li>
        <NavLink to="/register" activeClassName="active">Register</NavLink>
      </li>
      <li>
        <NavLink to="/edit" activeClassName="active">Edit</NavLink>
      </li>
    </ul>
  );
};

export default Header;