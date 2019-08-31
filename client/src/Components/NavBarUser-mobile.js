import React from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './Styles/NavBarMobile.scss';
import Logo from './Styles/Logo.png';

const NavBarUser = () => {
  return (
    <nav className="navbar">
      <img src={Logo} alt="SIXR Logo" className="sixr-logo" />
      <Menu right>
        {/* <div className="nav-wrapper-mobile"> */}
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
          to="/user"
          className="navigation-links-inner-mobile menu-item"
        >
          MY PROFILE
        </NavLink>
        {/* </div> */}
      </Menu>
    </nav>
  );
};

export default NavBarUser;
