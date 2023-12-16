import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import { ITEMS } from '../components/Items';

const Page = () => (
  <div className={styles.container}>
    <main className={styles.main}>
      <h1>コース選択</h1>
      <p className={styles.settingButton}>設定</p>
      <div className={styles.boxArea}>
        {ITEMS.map((item) => (
          <div key={item.id} className={styles.itemGroup}>
            <h2 className={styles.title}>{item.title}</h2>
            <Link href={item.href} className={styles.button}>
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </main>
  </div>
);

export default Page;
