const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const placeNameQuizData = [
  {
    title: '「熱海」この地名を答えよ',
    options: [
      { textResponse: 'ねつみ', isCorrect: false },
      { textResponse: 'あたみ', isCorrect: true },
      { textResponse: 'あたか', isCorrect: false },
      { textResponse: 'あつみ', isCorrect: false },
    ],
  },
  {
    title: '「留萌」この地名を答えよ',
    options: [
      { textResponse: 'りゅもん', isCorrect: false },
      { textResponse: 'るもい', isCorrect: true },
      { textResponse: 'るる', isCorrect: false },
      { textResponse: 'とめ', isCorrect: false },
    ],
  },
  {
    title: '「川内」この地名を答えよ',
    options: [
      { textResponse: 'せお', isCorrect: true },
      { textResponse: 'せんだい', isCorrect: false },
      { textResponse: 'せんない', isCorrect: false },
      { textResponse: 'せない', isCorrect: false },
    ],
  },
  {
    title: '「赤穂」この地名を答えよ',
    options: [
      { textResponse: 'せほう', isCorrect: false },
      { textResponse: 'せきほう', isCorrect: false },
      { textResponse: 'あがほ', isCorrect: false },
      { textResponse: 'あこう', isCorrect: true },
    ],
  },
  {
    title: '「我孫子」この駅名を答えよ',
    options: [
      { textResponse: 'あまち', isCorrect: false },
      { textResponse: 'わこうど', isCorrect: false },
      { textResponse: 'あびこ', isCorrect: true },
      { textResponse: 'あまご', isCorrect: false },
    ],
  },
];
