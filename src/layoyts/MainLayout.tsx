import React from 'react';
import styles from './MainLayout.module.scss';
import { Header } from 'components/header/Header';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <Outlet />
    </div>
  );
};
