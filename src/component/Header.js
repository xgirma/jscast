import React from 'react';
import {HashRouter, NavLink} from 'react-router-dom';
import '../style/Header.css';

const Header = () => (
  <HashRouter>
    <div className="Header">
      <NavLink
        to="/"
        exact
        className="Header-home"
      >Home
      </NavLink>
      
      <NavLink
        to="/library"
        exact
        className="Header-library"
      >Library
      </NavLink>
      
      <NavLink
        to="/about"
        exact
        className="Header-about"
      >About
      </NavLink>
    </div>
  </HashRouter>
);

export default Header;
