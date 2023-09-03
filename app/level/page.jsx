import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

const ITEMS = [
  {
    title: '初級編',
    href: 'beginner',
    text: `初級編`,
  },

  {
    title: '中級編',
    href: 'intermediate',
    text: `中級編`,
  },

  {
    title: '上級編',
    href: 'advanced',
    text: '上級編',
  },
];

const LINKS = [
  {
    id: '1',
    name: 'buttonBeginner',
    href: '/beginner',
  },
  {
    id: '2',
    name: 'buttonIntermediate',
    href: '/intermediate',
  },
  {
    id: '3',
    name: 'buttonAdvanced',
    href: 'advanced',
  },
];

const page = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>難易度選択</h1>
        <div className={styles.setup}>
          <Link className={styles.buttonSetup} href={'setup'}>
            設定
          </Link>
        </div>
        <div className={styles.buttonArea}>
          {ITEMS.map((item) => {
            return <h2 className={styles.title}>{item.title}</h2>;
          })}
          {LINKS.map((item) => {
            return (
              <Link key={item.id} href={item.href} className={styles.name}>
                {item.name}
              </Link>
            );
          })}
          {/* <div className={styles.beginner}>
            <h2 className={styles.begginerTitle}>初級編</h2>
            <Link className={styles.buttonBeginner} href={'beginner'}>
              スタート
            </Link>
          </div>
          <div className={styles.intermediate}>
            <h2 className={styles.intermediateTitle}>中級編</h2>
            <Link className={styles.buttonIntermediate} href={'intermediate'}>
              スタート
            </Link>
          </div>
          <div className={styles.advanced}>
            <h2 className={styles.advancedTitle}>上級編</h2>
            <Link className={styles.buttonAdvanced} href={'advanced'}>
              スタート
            </Link>
          </div> */}
        </div>
      </main>
    </div>
  );
};

export default page;
