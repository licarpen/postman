import React from 'react';
import styles from './Header.css';

const Header = () => {
  return (
    <div className={styles.Header}>
      <h1>Postman</h1>
      <h2>A serverside application for visualizing responses to RESTful requests</h2>
    </div>
  );
};

export default Header;
