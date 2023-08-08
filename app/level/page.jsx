import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

const ITEMS = [
  {
    title: '初級編',
    id: 'beginner',
    text: `初級編`,
  },

  {
    title: '中級編',
    id: 'intermediate',
    text: `中級編`,
  },

  {
    title: '上級編',
    id: 'advanced',
    message: '上級編',
  },
];

const page = () => {
  return (
    <div className={styles.container}>
      <title>難易度選択画面</title>
      <main className={styles.main}>
        <h1>難易度選択</h1>
        <div className={styles.buttonArea}>
          <div className={styles.beginner}>
            <p className={styles.begginerTitle}>初級編</p>
            <Link className={styles.buttonBeginner} href={'beginner'}>
              スタート
            </Link>
          </div>
          <div className={styles.intermediate}>
            <p className={styles.intermediateTitle}>中級編</p>
            <Link className={styles.buttonIntermediate} href={'intermediate'}>
              スタート
            </Link>
          </div>
          <div className={styles.advanced}>
            <p className={styles.advancedTitle}>上級編</p>
            <Link className={styles.buttonAdvanced} href={'advanced'}>
              スタート
            </Link>
          </div>
          <div className={styles.setup}>
            <Link className={styles.buttonSetup} href={'setup'}>
              設定
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
