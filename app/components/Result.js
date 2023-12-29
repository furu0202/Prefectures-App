import Link from 'next/link';

<div className={styles.quizCompletedMain}>
  <h1>{pathData.title} 結果発表</h1>
  <p className={styles.resultMessage}>
    お疲れ様でした<br></br>正解数は
    {count}
    問です
  </p>
  <div className={styles.buttonContainer}>
    <Link className={styles.button} href={'/select'}>
      コース選択へ戻る
    </Link>
    <Link className={styles.button} href={'/'}>
      解答を確認する
    </Link>
    <Link className={styles.button} href={'/'}>
      もう1度クイズに挑戦する
    </Link>
  </div>
</div>;
