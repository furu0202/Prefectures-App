import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <h1>都道府県クイズ</h1>
      </div>
      <div>
        <Link className={styles.button} href={'/level'}>
          スタート
        </Link>
      </div>
    </main>
  );
}
