import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

const page = () => {
  return (
    <div className={styles.container}>
      <title>難易度選択画面</title>
      <main className={styles.main}>
        <h1>難易度選択</h1>
        <div className={styles.buttonArea}>
          <div className={styles.beginner}>
            <p className={styles.begginerTitle}>説明文</p>
            <Link className={styles.buttonBeginner} href={'beginner'}></Link>
          </div>
          <div className={styles.intermediate}>
            <p>説明文</p>
            <Link
              className={styles.buttonIntermediate}
              href={'intermediate'}
            ></Link>
          </div>
          <div className={styles.advanced}>
            <p>説明文</p>
            <Link className={styles.buttonAdvanced} href={'advanced'}></Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
