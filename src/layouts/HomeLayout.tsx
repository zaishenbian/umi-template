import React from 'react';
import TopBar from '@/components/TopBar';
import styles from './index.scoped.less';

const HomeLayout: React.FC = ({
  children
}) => {
  return (
    <div className={styles['noaplus']}>
      <TopBar></TopBar>
      <div className={styles['noaplus-content']}>
        {children}
      </div>
    </div>
  );
}

export default HomeLayout;