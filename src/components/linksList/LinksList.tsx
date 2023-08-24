import React from 'react';
import styles from './LinksList.module.scss';
import Icon from 'shared/Icon';

export const LinksList = () => {
  return (
    <table className={styles.list}>
      <tr className={styles.list_row}>
        <th>Short Link</th>
        <th>Original Link</th>
        <th>QR Code</th>
        <th>Clicks</th>
        <th>Status</th>
        <th>Date</th>
      </tr>
      <tr className={styles.list_row}>
        <td>
          <a
            href='https://www.twitch.tv/quinella_admin'
            className={styles.link__short}
            rel='noreferrer'
            target='_blank'
          >
            https://www.twitch.tv/quinella_admin
          </a>
          <span className={styles.icon}>
            <Icon.CopyIcon
              stroke='#C9CED6'
              width={24}
              height={24}
            />
          </span>
        </td>
      </tr>
    </table>
  );
};
