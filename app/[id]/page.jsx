'use client';

import React from 'react';
import styles from './page.module.css';
import { usePathname } from 'next/navigation';
import { ITEMS } from '../components/Items';

const Page = () => {
  const pathname = usePathname();
  const pathData = ITEMS.find((item) => item.href === pathname);
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1 className={styles.title}>{pathData.title}</h1>
        <h1 className={styles.questionCount}>第X問 / 第Y問</h1>
        <h2 className={styles.totalCorrectAnswer}>現在の正解数:X問</h2>
        <h2 className={styles.questionArea}>問題文{pathData.question}</h2>
        <div className={styles.choicesContainer}>
          <p className={styles.choicesItem}>選択肢A</p>
          <p className={styles.choicesItem}>選択肢B</p>
          <p className={styles.choicesItem}>選択肢C</p>
          <p className={styles.choicesItem}>選択肢D</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
