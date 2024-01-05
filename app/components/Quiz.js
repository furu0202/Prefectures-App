import styles from '../page.module.css';

export function Quiz() {
  <div className={styles.main}>
    <h1 className={styles.title}>{pathData.title}</h1>
    <h1 className={styles.questionCount}>
      第{currentQuestion + 1}問 / 第{pathData.quizData.length}問
    </h1>
    <h2 className={styles.totalCorrectAnswer}>現在の正解数:{count}問</h2>
    <h2 className={styles.questionArea}>
      {pathData.quizData[currentQuestion].title}
    </h2>
    <div className={styles.choicesContainer}>
      {shuffle(pathData.quizData[currentQuestion].options).map(
        (item, index) => (
          <button
            key={index}
            className={styles.choicesItem}
            onClick={() => handleClick(item.isCorrect)}
          >
            {item.textResponse}
          </button>
        )
      )}
    </div>
  </div>;
}
