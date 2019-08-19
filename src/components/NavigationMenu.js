import React from 'react';
import { Link } from 'react-router-dom';

const NavigationMenu = () => (
  <ul>
    <li>
      <Link to="/">Catalog</Link>
    </li>
    <li>
      <Link to="/pages">Pages</Link>
    </li>
    <li>
      <Link to="/newpage">New page</Link>
    </li>
  </ul>
)

export default NavigationMenu;