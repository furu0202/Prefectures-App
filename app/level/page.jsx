import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

const ITEMS = [
  {
    id: '1',
    name: 'START',
    title: '日本地図クイズ',
    href: '/jpnmap',
    text: `日本地図に関するクイズです`,
  },

  {
    id: '2',
    name: 'START',
    title: '地名クイズ',
    href: '/placename',
    text: `各都道府県の地名に関するクイズです`,
  },

  {
    id: '3',
    name: 'START',
    title: '雑学クイズ',
    href: '/trivia',
    text: '各都道府県の雑学に関するクイズです',
  },
];

const page = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>難易度選択</h1>
        <div className={styles.boxArea}>
          {ITEMS.map((item) => {
            return (
              <div key={item.id} className={styles.itemGroup}>
                <h2 className={styles.title}>{item.title}</h2>
                <p className={styles.itemText}>{item.text}</p>
                <Link
                  key={item.id}
                  href={item.href}
                  className={`${styles['button']} ${styles[item.name]}`}
                >
                  {item.name}
                </Link>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default page;
