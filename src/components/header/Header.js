import React from 'react';
import styles from './Header.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className={styles.Header}>
    <h1>
      Ryan and Marty Characters
    </h1>
    <nav>
      <Link to="/">Back to List</Link>
    </nav>
  </header>
);

export default Header;
