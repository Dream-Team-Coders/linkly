import React from 'react';
import { Input } from 'shared/input/Input';
import styles from './InputGroup.module.scss';
import { ToggleButton } from 'shared/toggleButton/ToggleButton';

export const InputGroup = () => {
  return (
    <div className={styles.group}>
      <Input />
      <div className={styles.group_info}>
        <div className={styles.group_info__row}>
          <ToggleButton />
          Auto Paste from Clipboard
        </div>
        <div>
          You can create
          <span className={styles.group_info__highlited}> 05 </span> more links.
          Register Now to enjoy Unlimited usage
        </div>
      </div>
    </div>
  );
};
