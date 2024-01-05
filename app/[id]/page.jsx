'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import { usePathname } from 'next/navigation';
import { ITEMS } from '../components/Items';
import { Quiz } from '../components/Quiz';
import { Result } from '../components/Result';
import { shuffle } from 'lodash';
import Link from 'next/link';

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
      {quizCompleted ? <Result /> : <Quiz />}
    </div>
  );
};

export default Page;
