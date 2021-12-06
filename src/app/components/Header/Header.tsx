import React from 'react';

import basicLogo from '../../../assets/basic-logo.jpg';

import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <div className={styles.headerWrapper}>
      <img src={basicLogo} className={styles.logo} alt="company logo" />
      <h1 className={styles.companyName} title="LOGO">
        LOGO
      </h1>
    </div>
  );
};
