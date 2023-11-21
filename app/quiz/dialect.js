const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const dialectQuizData = [
  {
    title: '福岡県で主に使われる方言「なんばしよっと」意味を答えよ',
    options: [
      { textResponse: '何をしますか？', isCorrect: false },
      { textResponse: 'どこへ行きますか？', isCorrect: false },
      { textResponse: '何をしていますか？', isCorrect: true },
      { textResponse: '何か用ですか？', isCorrect: false },
    ],
  },
  {
    title: '福岡県で主に使われる方言「はらかいた」意味を答えよ',
    options: [
      { textResponse: 'お腹が痛い', isCorrect: false },
      { textResponse: '頭が痛い', isCorrect: true },
      { textResponse: '腹が立つ', isCorrect: false },
      { textResponse: '失敗した', isCorrect: false },
    ],
  },
  {
    title: '山口県で主に使われる方言「ちんぐー」意味を答えよ',
    options: [
      { textResponse: '球場', isCorrect: false },
      { textResponse: '旅行', isCorrect: false },
      { textResponse: '友達', isCorrect: false },
      { textResponse: '駅', isCorrect: true },
    ],
  },
  {
    title: '鳥取県で主に使われる方言「うっちゃ」意味を答えよ',
    options: [
      { textResponse: '割れた', isCorrect: false },
      { textResponse: '打った', isCorrect: false },
      { textResponse: 'あなた', isCorrect: false },
      { textResponse: 'わたし', isCorrect: true },
    ],
  },
  {
    title: '埼玉県で主に使われる方言「ひゃっこい」意味を答えよ',
    options: [
      { textResponse: '冷たい', isCorrect: true },
      { textResponse: '寒い', isCorrect: false },
      { textResponse: '怠い', isCorrect: false },
      { textResponse: '温い', isCorrect: false },
    ],
  },
  {
    title: '北海道で主に使われる方言「なして」意味を答えよ',
    options: [
      { textResponse: 'どうして', isCorrect: true },
      { textResponse: 'なぜ', isCorrect: false },
      { textResponse: 'こうして', isCorrect: false },
      { textResponse: 'あれ', isCorrect: false },
    ],
  },
  {
    title: '沖縄県で主に使われる方言「なんくるないさ」意味を答えよ',
    options: [
      { textResponse: 'いってきます', isCorrect: false },
      { textResponse: 'なんとかなるさ', isCorrect: false },
      { textResponse: '見当たらない', isCorrect: false },
      { textResponse: '問題ない', isCorrect: true },
    ],
  },
  {
    title: '鳥取県で主に使われる方言「だんだん」意味を答えよ',
    options: [
      { textResponse: '徐々に', isCorrect: false },
      { textResponse: 'ありがとう', isCorrect: true },
      { textResponse: '温かい', isCorrect: false },
      { textResponse: '落ち着く', isCorrect: false },
    ],
  },
];
