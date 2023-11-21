const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const triviaQuizData = [
  {
    title:
      '2012年5月22日にグランドオープンした、地上デジタル放送などの電波を送信する世界一高い自立電波塔である「東京スカイツリー」があるのは東京都何区か答えよ',
    options: [
      { textResponse: '江戸川区', isCorrect: false },
      { textResponse: '港区', isCorrect: false },
      { textResponse: '荒川区', isCorrect: false },
      { textResponse: '墨田区', isCorrect: true },
    ],
  },
  {
    title: '日本三景である「天橋立」がある都道府県を答えよ',
    options: [
      { textResponse: '岡山県', isCorrect: false },
      { textResponse: '京都府', isCorrect: true },
      { textResponse: '島根県', isCorrect: false },
      { textResponse: '兵庫県', isCorrect: false },
    ],
  },
  {
    title: 'リンゴの生産地が日本１位の都道府県を答えよ',
    options: [
      { textResponse: '青森県', isCorrect: true },
      { textResponse: '秋田県', isCorrect: false },
      { textResponse: '岩手県', isCorrect: false },
      { textResponse: '山形県', isCorrect: false },
    ],
  },
  {
    title:
      'プロ野球、中日ドラゴンズの本拠地である「バンテリンドーム」がある都道府県を答えよ',
    options: [
      { textResponse: '福岡県', isCorrect: false },
      { textResponse: '北海道', isCorrect: false },
      { textResponse: '宮城県', isCorrect: false },
      { textResponse: '愛知県', isCorrect: true },
    ],
  },
  {
    title:
      '1990年〜2017年まで存在していた宇宙のテーマパーク、「スペースワールド」があった都道府県を答えよ',
    options: [
      { textResponse: '福岡県', isCorrect: true },
      { textResponse: '岡山県', isCorrect: false },
      { textResponse: '山梨県', isCorrect: false },
      { textResponse: '宮城県', isCorrect: false },
    ],
  },
  {
    title: '2023年10月現在、日本で2番目に人口が少ない県を答えよ',
    options: [
      { textResponse: '徳島県', isCorrect: false },
      { textResponse: '高知県', isCorrect: false },
      { textResponse: '島根県', isCorrect: true },
      { textResponse: '鳥取県', isCorrect: false },
    ],
  },
  {
    title: '「レンゲソウ」が県花である都道府県を答えよ',
    options: [
      { textResponse: '徳島県', isCorrect: false },
      { textResponse: '岩手県', isCorrect: false },
      { textResponse: '岐阜県', isCorrect: true },
      { textResponse: '宮崎県', isCorrect: false },
    ],
  },
  {
    title: '「イヌワシ」が県鳥である都道府県を答えよ',
    options: [
      { textResponse: '石川県', isCorrect: true },
      { textResponse: '青森県', isCorrect: false },
      { textResponse: '広島県', isCorrect: false },
      { textResponse: '福岡県', isCorrect: false },
    ],
  },
  {
    title: '「さくらんぼ」の生産量が日本１位の都道府県を答えよ',
    options: [
      { textResponse: '山形県', isCorrect: true },
      { textResponse: '青森県', isCorrect: false },
      { textResponse: '秋田県', isCorrect: false },
      { textResponse: '岩手県', isCorrect: false },
    ],
  },
  {
    title: '「ぶどう」の生産量が日本１位の都道府県を答えよ',
    options: [
      { textResponse: '高知県', isCorrect: false },
      { textResponse: '大分県', isCorrect: false },
      { textResponse: '山梨県', isCorrect: true },
      { textResponse: '秋田県', isCorrect: false },
    ],
  },
];
