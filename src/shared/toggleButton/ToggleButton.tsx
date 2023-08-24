import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styles from './ToggleButton.module.scss';

export const ToggleButton = () => {
  const spring = {
    type: 'spring',
    stiffness: 500,
    damping: 50,
  };

  const [isToggled, setIsToggled] = useState(true);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div
      className={styles.switch}
      onClick={handleToggle}
      data-istoggled={isToggled}
    >
      <motion.div
        className={styles.handle}
        layout
        transition={spring}
      ></motion.div>
    </div>
  );
};
