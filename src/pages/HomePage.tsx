import React from 'react';
import styles from './HomePage.module.scss';
import { InputGroup } from 'components/inputGroup/InputGroup';
import { LinksList } from 'components/linksList/LinksList';

export const HomePage = () => {
  return (
    <div className={styles.page}>
      <h1 className={styles.page__title}>Shorten Your Loooong Links :)</h1>
      <p className={styles.page__description}>
        Linkly is an efficient and easy-to-use URL shortening service that
        streamlines your online experience.
      </p>
      <InputGroup />
      <LinksList />
    </div>
  );
};
