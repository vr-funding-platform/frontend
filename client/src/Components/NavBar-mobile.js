import React from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './Styles/NavBarMobile.scss';
import Logo from './Styles/Logo.png';

const NavBar = () => {

  return (
    <nav className="navbar">
      <img src={Logo} alt="SIXR Logo" className="sixr-logo" />
      <Menu >
        <a
          href="https://vr-funding-platform.github.io/SIXR--marketing/index.html"
          className="navigation-links-inner-mobile menu-item"
        >
          Home
        </a>
        <NavLink
          exact={true}
          activeStyle={{ color: '#ffffff' }}
          to="/projects"
          className="navigation-links-inner-mobile menu-item"
        >
          Projects
        </NavLink>

        <NavLink
          exact={true}
          activeStyle={{ color: '#ffffff' }}
          to="/"
          className="navigation-links-inner-mobile menu-item"
        >
          Log In
        </NavLink>
        <NavLink
          exact={true}
          activeStyle={{
            color: '#ffffff'
          }}
          to="/signup"
          className="navigation-links-inner-mobile menu-item"
        >
          Sign Up
        </NavLink>
      </Menu>
    </nav>
  );
};

export default NavBar;
