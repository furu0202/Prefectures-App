const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const jpnMapQuizData = [
  {
    title: '「富士山」という山がある都道府県を答えよ',
    options: [
      { textResponse: '群馬県', isCorrect: false },
      { textResponse: '山梨県', isCorrect: true },
      { textResponse: '静岡県', isCorrect: false },
      { textResponse: '長野県', isCorrect: false },
    ],
  },
  {
    title: '日本で最も人口が多い都道府県を答えよ',
    options: [
      { textResponse: '北海道', isCorrect: false },
      { textResponse: '東京都', isCorrect: true },
      { textResponse: '大阪府', isCorrect: false },
      { textResponse: '福岡県', isCorrect: false },
    ],
  },
  {
    title: '日本で最も面積が広い都道府県を答えよ',
    options: [
      { textResponse: '沖縄県', isCorrect: false },
      { textResponse: '東京都', isCorrect: false },
      { textResponse: '大阪府', isCorrect: false },
      { textResponse: '北海道', isCorrect: true },
    ],
  },
  {
    title: '奈良時代に平城京が置かれた都道府県を答えよ',
    options: [
      { textResponse: '京都府', isCorrect: false },
      { textResponse: '大阪府', isCorrect: false },
      { textResponse: '和歌山県', isCorrect: false },
      { textResponse: '奈良県', isCorrect: true },
    ],
  },
  {
    title: '日本で最も北に位置する都道府県を答えよ',
    options: [
      { textResponse: '青森県', isCorrect: false },
      { textResponse: '北海道', isCorrect: true },
      { textResponse: '沖縄県', isCorrect: false },
      { textResponse: '東京都', isCorrect: false },
    ],
  },
  {
    title: '本州で最も西端にある都道府県を答えよ',
    options: [
      { textResponse: '青森県', isCorrect: false },
      { textResponse: '山口県', isCorrect: true },
      { textResponse: '沖縄県', isCorrect: false },
      { textResponse: '愛知県', isCorrect: false },
    ],
  },
  {
    title: '本初子午線がある都道府県を答えよ',
    options: [
      { textResponse: '宮城県', isCorrect: false },
      { textResponse: '福岡県', isCorrect: false },
      { textResponse: '兵庫県', isCorrect: true },
      { textResponse: '富山県', isCorrect: false },
    ],
  },
  {
    title: '日本で一番大きな砂漠がある都道府県を答えよ',
    options: [
      { textResponse: '青森県', isCorrect: true },
      { textResponse: '島根県', isCorrect: false },
      { textResponse: '鳥取県', isCorrect: false },
      { textResponse: '鹿児島県', isCorrect: false },
    ],
  },
  {
    title: '出雲大社がある都道府県を答えよ',
    options: [
      { textResponse: '宮崎県', isCorrect: false },
      { textResponse: '鹿児島県', isCorrect: false },
      { textResponse: '島根県', isCorrect: true },
      { textResponse: '熊本県', isCorrect: false },
    ],
  },
  {
    title: '琵琶湖がある都道府県を答えよ',
    options: [
      { textResponse: '三重県', isCorrect: false },
      { textResponse: '石川県', isCorrect: false },
      { textResponse: '山梨県', isCorrect: false },
      { textResponse: '滋賀県', isCorrect: true },
    ],
  },
  {
    title: 'ディズニーランドがある都道府県を答えよ',
    options: [
      { textResponse: '東京都', isCorrect: false },
      { textResponse: '神奈川県', isCorrect: false },
      { textResponse: '北海道', isCorrect: false },
      { textResponse: '千葉県', isCorrect: true },
    ],
  },
  {
    title: 'サンリオピューロランドがある都道府県を答えよ',
    options: [
      { textResponse: '福岡県', isCorrect: false },
      { textResponse: '大阪府', isCorrect: false },
      { textResponse: '神奈川県', isCorrect: false },
      { textResponse: '東京都', isCorrect: true },
    ],
  },
  {
    title: 'ハウステンボスがある都道府県を答えよ',
    options: [
      { textResponse: '長崎県', isCorrect: true },
      { textResponse: '鳥取県', isCorrect: false },
      { textResponse: '兵庫県', isCorrect: false },
      { textResponse: '青森県', isCorrect: false },
    ],
  },
  {
    title: '富士急ハイランドがある都道府県を答えよ',
    options: [
      { textResponse: '山梨県', isCorrect: true },
      { textResponse: '静岡県', isCorrect: false },
      { textResponse: '岐阜県', isCorrect: false },
      { textResponse: '愛知県', isCorrect: false },
    ],
  },
  {
    title: '鬼怒川温泉がある都道府県を答えよ',
    options: [
      { textResponse: '栃木県', isCorrect: true },
      { textResponse: '大分県', isCorrect: false },
      { textResponse: '福井県', isCorrect: false },
      { textResponse: '石川県', isCorrect: false },
    ],
  },
  {
    title: '平等院鳳凰堂がある都道府県を答えよ',
    options: [
      { textResponse: '石川県', isCorrect: false },
      { textResponse: '京都府', isCorrect: true },
      { textResponse: '和歌山県', isCorrect: false },
      { textResponse: '奈良県', isCorrect: false },
    ],
  },
];
