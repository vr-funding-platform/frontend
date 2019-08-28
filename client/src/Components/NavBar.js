import React from 'react';
import { NavLink } from 'react-router-dom';
import './Styles/NavBar.scss';
import Logo from './Styles/Logo.png';

const NavBar = () => {
  return (
    <nav className="navbar">
      <img src={Logo} alt="SIXR Logo" className="sixr-logo" />
      <div className="nav-wrapper">
        <NavLink exact={true} to="/">
          Home
        </NavLink>
        <NavLink exact={true} activeClassName="active" to="/projects">
          Projects
        </NavLink>

        {/* //IF user is logged in, show below */}
        {/* <div className="user-navcard">
          <NavLink exact={true} activeClassName="active" to="/user" className="user-card-link">
            Jeff the philanthropic one
            <div className="img-wrapper">
              <img
                src="https://i.imgur.com/j8xvz88.jpg"
                alt="user-icon"
                className="user-icon"
              />
            </div>
          </NavLink>
        </div> */}

        {/* //UNLESS user is not logged in, display below */}
        <div className="login-signup-btns">
          <NavLink
            exact={true}
            activeClassName="active"
            to="/login"
            className="login-btn"
          >
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
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
