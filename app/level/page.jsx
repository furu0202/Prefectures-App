import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

const page = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>難易度選択</h1>
        <div className={styles.buttonArea}>
          <div className={styles.buttonBeginner}>
            <Link href={'beginner'}>初級編</Link>
          </div>
          <div className={styles.buttonIntermediate}>
            <Link href={'intermediate'}>中級編</Link>
          </div>
          <div className={styles.buttonAdvanced}>
            <Link href={'advanced'}>上級編</Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
