import React from 'react';
import { Input } from 'shared/input/Input';
import styles from './InputGroup.module.scss';

export const InputGroup = () => {
  return (
    <div className={styles.group}>
      <Input />
    </div>
  );
};
