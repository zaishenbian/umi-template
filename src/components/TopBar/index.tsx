import React from 'react';
import styles from './index.scoped.less';
import Logo from './Logo';

const TopBar: React.FC = () => {
  return (
    <div className={styles['top-bar']}>
      <Logo />
    </div>
  );
}

export default TopBar;