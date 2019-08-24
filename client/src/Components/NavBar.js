import React from 'react';
import { NavLink } from 'react-router-dom';
import './Styles/NavBar.scss';
import Logo from './Styles/Logo.png';

const NavBar = () => {
  return (
    <nav className="navbar">
      <img src={Logo} alt="SIXR Logo" />
      <div>
        <NavLink exact={true} to="/">
          Home
        </NavLink>
        <NavLink exact={true} activeClassName="active" to="/projects">
          Projects
        </NavLink>
        
        {/* //IF user is logged in, show below */}
  <NavLink exact={true} activeClassName="active" to="/projects">Jeff the philanthropic one</NavLink>
        
        {/* //UNLESS user is not logged in, display below */}

        {/* <NavLink exact={true} activeClassName="active" to="/login">
          Log In
        </NavLink>
        <NavLink
          exact={true}
          activeClassName="active"
          to="/signup"
          className="link-border"
        >
          Sign Up
        </NavLink> */}
       
      </div>
    </nav>
  );
};

export default NavBar;
