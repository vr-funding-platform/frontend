import React from 'react';
import { NavLink } from 'react-router-dom';
import './Styles/NavBar.scss';
import Logo from './Styles/Logo.png';

const NavBar = () => {
  return (
    <nav className="navbar">
      <img src={Logo} alt="SIXR Logo" />
      <nav>
        <NavLink exact={true} to="/">
          Home
        </NavLink>
        <NavLink exact={true} activeClassName="active" to="/projects">
          Projects
        </NavLink>
        <NavLink exact={true} activeClassName="active" to="/login">
          Log In
        </NavLink>
        <NavLink
          exact={true}
          activeClassName="active"
          to="/signup"
          className="link-border"
        >
          Sign Up
        </NavLink>
      </nav>
    </nav>
  );
};

export default NavBar;
