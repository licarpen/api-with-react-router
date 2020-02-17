import React from 'react';
import styles from './Header.css';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  return (<header className={styles.Header}>
    <h1>
      Ryan and Marty Characters
    </h1>
    <nav>
      {
        location.pathname.includes('/character/') ? <Link to="/">Back to List</Link> : null
      }
      
    </nav>
  </header>);
};

export default Header;
