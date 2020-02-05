import React from 'react';
import styles from './Header.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>
      Ryan and Marty Characters
    </h1>
    <nav>
      <ul>
        <li><Link to="/">Back to List</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
