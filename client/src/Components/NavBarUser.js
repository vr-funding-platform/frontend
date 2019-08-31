import React from 'react';
import { NavLink } from 'react-router-dom';
import './Styles/NavBar.scss';
import Logo from './Styles/Logo.png';

const NavBarUser = () => {
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

        <div className="user-navcard">
          <NavLink
            exact={true}
            activeStyle={{ color: '#ffffff' }}
            to="/user/1"
            className="user-card-link"
          >
            Jeff the philanthropic one
            <div className="img-wrapper">
              <img
                src="https://i.imgur.com/j8xvz88.jpg"
                alt="user-icon"
                className="user-icon"
              />
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBarUser;
