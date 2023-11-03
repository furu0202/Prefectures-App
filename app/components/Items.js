import { dialectQuizData } from '../quiz/dialect';
import { placeNameQuizData } from '../quiz/placename';
import { prefecturalCapitalQuizData } from '../quiz/prefecturalcapital';
import { stationNameQuizData } from '../quiz/stationname';
import { triviaQuizData } from '../quiz/trivia';

export const ITEMS = [
  {
    id: '1',
    name: 'START',
    title: '日本地図クイズ',
    href: '/jpnmap',
    quizData: [],
  },

  {
    id: '2',
    name: 'START',
    title: '地名クイズ',
    href: '/placename',
    quizData: placeNameQuizData,
  },

  {
    id: '3',
    name: 'START',
    title: '雑学クイズ',
    href: '/trivia',
    quizData: triviaQuizData,
  },
  {
    id: '4',
    name: 'START',
    title: '駅名クイズ',
    href: '/stationname',
    quizData: stationNameQuizData,
  },
  {
    id: '5',
    name: 'START',
    title: '方言クイズ',
    href: '/dialect',
    quizData: dialectQuizData,
  },
  {
    id: '6',
    name: 'START',
    title: '県庁所在地クイズ',
    href: '/prefecturalcapital',
    quizData: prefecturalCapitalQuizData,
  },
];
