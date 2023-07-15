import React from 'react';
import styles from './page.module.css';

const page = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>難易度選択</h1>
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
    </div>
  );
};

export default page;
