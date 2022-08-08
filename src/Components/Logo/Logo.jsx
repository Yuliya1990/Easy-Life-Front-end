import styles from './Logo.module.css';
import React from 'react';

const Logo = () => {
  return (
    <div className={styles.Logo}>
      <div className={styles.WhiteLine1}></div>
      <div className={styles.WhiteLine2}></div>
      <div className={styles.text}>
        <div style={{ height: '40px', marginTop: -5 }}>EASY</div>
        <div style={{ height: '30px' }}>LIFE</div>
      </div>
    </div>
  );
};
export default Logo;
