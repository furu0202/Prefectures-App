import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

const ITEMS = [
  {
    level: '初級',
    explanation: ``,
  },

  {
    level: '中級',
    explanation: ``,
  },

  {
    level: '上級',
    explanation: ``,
  },
];
const page = () => {
  return (
    <div className={styles.container}>
      <title>難易度選択画面</title>
      <main className={styles.main}>
        <h1>難易度選択</h1>
        <div className={styles.buttonArea}>
          <div>
            <Link className={styles.buttonBeginner} href={'beginner'}></Link>
          </div>
          <div>
            <Link
              className={styles.buttonIntermediate}
              href={'intermediate'}
            ></Link>
          </div>
          <div>
            <Link className={styles.buttonAdvanced} href={'advanced'}></Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
