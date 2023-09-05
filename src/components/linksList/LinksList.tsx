import React from 'react';
import styles from './LinksList.module.scss';
import Icon from 'shared/Icon';
import QRCode from 'react-qr-code';

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
            <Icon.CopyIcon stroke='#C9CED6' width={24} height={24} />
          </span>
        </td>
        <td>
          <a
            href='https://www.twitch.tv/quinella_admin'
            className={styles.link__short}
            rel='noreferrer'
            target='_blank'
          >
            https://www.twitch.tv/quinella_admin
          </a>
        </td>
        <td style={{ padding: '8px' }}>
          <QRCode
            bgColor='transparent'
            fgColor={'#C9CED6'}
            style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
            value={'https://www.twitch.tv/quinella_admin'}
          />
        </td>
        <td>11313</td>
        <td>
          {/* <span className={styles.active}>Active</span>
          <span className={styles.active__icon}>
            <Icon.LinkIcon stroke='white' />
          </span> */}
          <span className={styles.inactive}>Inactive</span>
          <span className={styles.inactive__icon}>
            <Icon.LinkIcon stroke='white' />
          </span>
        </td>
        <td>
          Oct-10-2023
        </td>
      </tr>
    </table>
  );
};
