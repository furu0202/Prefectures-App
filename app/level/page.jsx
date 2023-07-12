import React from 'react';
import styles from './page.module.css';

const page = () => {
  return (
    <main className={styles.main}>
      <div className={styles.buttonBeginner}>
        <button>初級編</button>
      </div>
      <div className={styles.buttonIntermediate}>
        <button>中級編</button>
      </div>
      <div className={styles.buttonAdvanced}>
        <button>上級編</button>
      </div>
    </main>
  );
};

export default page;
