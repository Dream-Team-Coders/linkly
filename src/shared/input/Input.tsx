import React, { useState } from 'react';
import styles from './input.module.scss';
import { Button } from 'shared/button/Button';
import Icon from 'shared/Icon';

export const Input = () => {
  const [inputLink, setInputLink] = useState('');

  return (
    <div className={styles.wrapper}>
      <Icon.LinkIcon stroke={'#fff'} width={30} height={30} />
      <input
        className={styles.wrapper_input}
        placeholder='Enter the link here'
        value={inputLink}
        onChange={(e) => {
          setInputLink(e.target.value);
        }}
      />
      <Button title={'Shorten Now!'} isColored={true} />
    </div>
  );
};
