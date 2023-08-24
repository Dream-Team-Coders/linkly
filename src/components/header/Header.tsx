import React from 'react';
import styles from './Header.module.scss';
import { Button } from 'shared/button/Button';
import Icon from 'shared/Icon';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>Linkly</div>
      <div className={styles.header__actions}>
        <Button
          icon={<Icon.SignInIcon stroke='#fff' width={20} height={20} />}
          title={'Login'}
          isColored={false}
        />
        <Button title={'Register Now'} isColored={true} />
      </div>
    </header>
  );
};
