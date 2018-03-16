import React from 'react';
import {HashRouter, NavLink} from "react-router-dom";
import '../style/Header.css';

const Header = () => (
  <HashRouter>
    <ul className="container-header">
      
      <li className="item-home">
        <NavLink
          to="/"
          exact={true}
        >Home
        </NavLink>
      </li>
      
      <li className="item-library">
        <NavLink
          to="/library"
          exact={true}
        >Library
        </NavLink>
      </li>
      
      <li className="item-about">
        <NavLink
          to="/about"
          exact={true}
        >About
        </NavLink>
      </li>
    
    </ul>
  </HashRouter>
);

export default Header;