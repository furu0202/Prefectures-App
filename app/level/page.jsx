import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

const ITEMS = [
  {
    id: '1',
    title: '日本地図クイズ',
    href: 'mapJpnQuiz',
    text: `各都道府県の形に関するクイズです`,
  },

  {
    id: '2',
    title: '地名クイズ',
    href: 'placeNameQuiz',
    text: `各都道府県の地名に関するクイズです`,
  },

  {
    id: '3',
    title: '名産品クイズ',
    href: 'localSpecialtyQuiz',
    text: '各都道府県の名産品に関するクイズです',
  },
];

const LINKS = [
  {
    id: '1',
    name: 'START',
    href: '/mapJpn',
  },
  {
    id: '2',
    name: 'START',
    href: '/placeName',
  },
  {
    id: '3',
    name: 'START',
    href: '/localSpecialty',
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
                <div className={`${styles['button']} ${styles[item.name]}`}>
                  {item.name}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default page;
