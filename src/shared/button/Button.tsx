import React from 'react';
import styles from './Button.module.scss';

interface IButton {
  title: string;
  isColored: boolean;
  icon?: React.ReactNode;
}

export const Button = ({ title, isColored, icon }: IButton) => {
  return (
    <button className={`${styles.btn} ${isColored && styles.btn__colored}`}>
      {title}
    </button>
  );
};
