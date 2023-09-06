import { motion } from 'framer-motion';
import React, { MouseEventHandler } from 'react';
import styles from './QRModal.tsx.module.scss';
import QRCode from 'react-qr-code';
import { Button } from 'shared/button/Button';

const dropIn = {
  hidden: {
    y: '100px',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffnes: 500,
    },
  },
  exit: {
    y: '-100px',
    opacity: 0,
  },
};

interface IQRModal {
  onClick: MouseEventHandler<HTMLDivElement>;
}

export const QRModal = ({ onClick }: IQRModal) => {
  return (
    <motion.div
      className={styles.backdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClick}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={styles.modal}
        variants={dropIn}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <QRCode
          bgColor='transparent'
          fgColor={'#C9CED6'}
          style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
          value={'https://www.twitch.tv/quinella_admin'}
        />
        <Button title={'Click to copy!'} isColored={true} />
      </motion.div>
    </motion.div>
  );
};
