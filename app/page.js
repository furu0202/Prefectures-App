import Image from 'next/image';
import Head from 'next/head';
import styles from './page.module.css';
import Prefectures from '../app/image/Prefectures.jpg';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <h1>都道府県クイズ</h1>
      </div>
      <div className={styles.button}>
        <button>スタート</button>
      </div>
    </main>
  );
}
