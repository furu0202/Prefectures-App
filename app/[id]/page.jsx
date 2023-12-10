'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import { usePathname } from 'next/navigation';
import { ITEMS } from '../components/Items';
import { shuffle } from 'lodash';

const Page = () => {
  const pathname = usePathname();
  const pathData = ITEMS.find((item) => item.href === pathname);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [count, setCount] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleClick = (isCorrect) => {
    if (isCorrect) {
      setCount(count + 1);
    } else {
    }
    if (currentQuestion < pathData.quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <div className={styles.container}>
      {quizCompleted ? (
        <div>
          <h2>クイズ結果発表</h2>
        </div>
      ) : (
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
        </div>
      )}
      ;
    </div>
  );
};

export default Page;
