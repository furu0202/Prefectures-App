import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

const ITEMS = [
  {
    id: '1',
    title: '初級編',
    href: 'beginner',
    text: `初級編`,
  },

  {
    id: '2',
    title: '中級編',
    href: 'intermediate',
    text: `中級編`,
  },

  {
    id: '3',
    title: '上級編',
    href: 'advanced',
    text: '上級編',
  },
];

const LINKS = [
  {
    id: '1',
    name: 'スタート',
    href: '/beginner',
  },
  {
    id: '2',
    name: 'スタート',
    href: '/intermediate',
  },
  {
    id: '3',
    name: 'スタート',
    href: '/advanced',
  },
];

const page = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>難易度選択</h1>
        <div className={styles.titleArea}>
          {ITEMS.map((item) => {
            return (
              <h2 key={item.id} className={styles.title}>
                {item.title}
              </h2>
            );
          })}
        </div>
        <div className={styles.buttonArea}>
          {LINKS.map((item) => {
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`${styles['button']} ${styles[item.name]}`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default page;
