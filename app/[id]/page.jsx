'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import { usePathname } from 'next/navigation';
import { ITEMS } from '../components/Items';

const Page = () => {
  const pathname = usePathname();
  const pathData = ITEMS.find((item) => item.href === pathname);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [count, setCount] = useState(0);
  const handleClick = (isCorrect) => {
    if (isCorrect) {
      setCount(count + 1);
    }
    if (currentQuestion < pathData.quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
    }
  };

  return (
    <div className={styles.container}>
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
          {pathData.quizData[currentQuestion].options.map((item, index) => (
            <p key={index} className={styles.choicesItem}>
              <button onClick={() => handleClick(item.isCorrect)}>
                {item.textResponse}
              </button>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
