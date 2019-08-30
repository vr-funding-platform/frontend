import React from 'react';
import { useMedia } from 'react-use';
import { NavLink } from 'react-router-dom';
import './Styles/NavBar.scss';
import Logo from './Styles/Logo.png';

const NavBar = () => {
  const match = useMedia('(max-width: 1050px)');

  return (
    <nav className="navbar">
      <img src={Logo} alt="SIXR Logo" className="sixr-logo" />
      <div className="nav-wrapper">
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
          className="navigation-links-inner"
        >
          Projects
        </NavLink>

        <div className="login-signup-btns">
          <NavLink
            exact={true}
            activeStyle={{ color: '#ffffff' }}
            to="/"
            className="login-btn navigation-links-inner"
          >
            Log In
          </NavLink>
          <NavLink
            exact={true}
            activeStyle={{
              color: '#ffffff',
              border: match ? '2px solid #ffffff' : '4px solid #ffffff'
            }}
            to="/signup"
            className="sign-up-btn"
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
