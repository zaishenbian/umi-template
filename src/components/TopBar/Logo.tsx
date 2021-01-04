import React from 'react';
import styles from './index.scoped.less';
import logo from '@/assets/logo.svg';
import { FormattedMessage, Link } from 'umi';

const Logo: React.FC = () => {
  return (
    <div className={styles['logo']}>
      <Link to="/" className={styles['logo-area']}>
        <img alt="logo" className={styles['logo-pic']} src={logo} />
      </Link>
      <div className={styles['workbench-menu']}>
        <Link to="/noaplus">
          <FormattedMessage id="label.workbench"></FormattedMessage>
        </Link>
      </div>
    </div>
  );
}

export default Logo;