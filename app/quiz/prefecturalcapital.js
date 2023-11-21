const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const prefecturalCapitalQuizData = [
  {
    title: '大阪府の県庁所在地を答えよ',
    options: [
      { textResponse: '難波', isCorrect: false },
      { textResponse: '大阪', isCorrect: true },
      { textResponse: '浪速', isCorrect: false },
      { textResponse: '堺', isCorrect: false },
    ],
  },
  {
    title: '神奈川県の県庁所在地を答えよ',
    options: [
      { textResponse: '神奈川', isCorrect: false },
      { textResponse: '横浜', isCorrect: true },
      { textResponse: '横須賀', isCorrect: false },
      { textResponse: '港北', isCorrect: false },
    ],
  },
  {
    title: '北海道の県庁所在地を答えよ',
    options: [
      { textResponse: '稚内', isCorrect: false },
      { textResponse: '北海道', isCorrect: false },
      { textResponse: '千歳', isCorrect: false },
      { textResponse: '札幌', isCorrect: true },
    ],
  },
  {
    title: '京都の県庁所在地を答えよ',
    options: [
      { textResponse: '舞子', isCorrect: false },
      { textResponse: '烏丸', isCorrect: false },
      { textResponse: '右京', isCorrect: false },
      { textResponse: '京都', isCorrect: true },
    ],
  },
  {
    title: '岡山の県庁所在地を答えよ',
    options: [
      { textResponse: '岡山', isCorrect: false },
      { textResponse: '倉敷', isCorrect: true },
      { textResponse: '備前', isCorrect: false },
      { textResponse: '津山', isCorrect: false },
    ],
  },
  {
    title: '兵庫の県庁所在地を答えよ',
    options: [
      { textResponse: '兵庫', isCorrect: false },
      { textResponse: '神戸', isCorrect: true },
      { textResponse: '三宮', isCorrect: false },
      { textResponse: '姫路', isCorrect: false },
    ],
  },
  {
    title: '青森の県庁所在地を答えよ',
    options: [
      { textResponse: '青森', isCorrect: true },
      { textResponse: 'むつ', isCorrect: false },
      { textResponse: '八戸', isCorrect: false },
      { textResponse: '十和田', isCorrect: false },
    ],
  },
  {
    title: '秋田の県庁所在地を答えよ',
    options: [
      { textResponse: '秋田', isCorrect: true },
      { textResponse: '横手', isCorrect: false },
      { textResponse: '大仙', isCorrect: false },
      { textResponse: '由利本荘', isCorrect: false },
    ],
  },
];
