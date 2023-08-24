import React from 'react';
import { Input } from 'shared/input/Input';
import styles from './InputGroup.module.scss';

export const InputGroup = () => {
  return (
    <div className={styles.group}>
      <Input />
      <div className={styles.group_info}>
        <div>Auto Paste from Clipboard</div>
        <div>
          You can create <b className={styles.group_info__highlited}>05</b> more
          links. Register Now to enjoy Unlimited usage
        </div>
      </div>
    </div>
  );
};
