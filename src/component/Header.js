import React from 'react';
import {HashRouter, NavLink} from 'react-router-dom';
import '../style/Header.css';

const Header = () => (
  <div className="Header">
    <HashRouter>
      <ul className="Header-list">
        <li className="Header-home">
          <NavLink
            to="/"
            exact
          >Home
          </NavLink>
        </li>
        
        <li className="Header-library">
          <NavLink
            to="/library"
            exact
          >Library
          </NavLink>
        </li>
        
        <li className="Header-about">
          <NavLink
            to="/about"
            exact
          >About
          </NavLink>
        </li>
      
      </ul>
    </HashRouter>
  </div>
);

export default Header;
