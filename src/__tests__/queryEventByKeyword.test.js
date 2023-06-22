const { queryEventByKeyword } = require('../App/utils/queryEventByKeyword');

const event1 = {
  properties : {
    tag: "食事、買い物、遊び",
    event_name: "麦とパンのマルシェ",
    description: "さぬきマルシェの中でも人気テーマで、様々なベーカリーのパンや県産の小麦・もち麦を使った商品が並びます。\nほか、初出店2店をはじめ、テーマメニューの販売店が22店、全50店ほどが出店予定です。"
  }
}
const event2 = {
  properties : {
    tag: "オリーブ豚、祭り",
    event_name: "オリーブ豚祭り",
    description: "県産の銘柄肉を使用した、焼き立て、揚げたての\n温かいメニューを販売しています。"
  }
}
const event3 = {
  properties : {
    tag: "マルシェ、スイーツ",
    event_name: "ジェラート頬張りマルシェ",
    description: "美味しいアイスを提供します。産地直送です。"
  }
}

const events = [event1, event2, event3];

test('キーワードが tag に含まれるかどうかを判定する', () => {

  const query = '食事';
  const result = queryEventByKeyword(query, events);
  expect(result).toContain(event1);

  const query2 = 'オリーブ豚';
  const result2 = queryEventByKeyword(query2, events);
  expect(result2).toContain(event2);

  const query3 = 'マルシェ';
  const result3 = queryEventByKeyword(query3, events);
  expect(result3).toContain(event3);
});

test('キーワードが tag に含まれない場合は空の配列を返す', () => {

    const query = '映画';
    const result = queryEventByKeyword(query, events);
    expect(result).toEqual([]);
});

test('キーワードがイベント名に含まれるかどうかを判定する', () => {

  const query = '麦とパンのマルシェ';
  const result = queryEventByKeyword(query, events);
  expect(result).toContain(event1);

  const query2 = 'オリーブ豚祭り';
  const result2 = queryEventByKeyword(query2, events);
  expect(result2).toContain(event2);

  const query3 = 'ジェラート頬張りマルシェ';
  const result3 = queryEventByKeyword(query3, events);
  expect(result3).toContain(event3);
});

test('キーワードがイベント名に含まれない場合は空の配列を返す', () => {
      const query = '映画';
      const result = queryEventByKeyword(query, events);
      expect(result).toEqual([]);}
);

test('キーワードが説明文に含まれるかどうかを判定する', () => {

    const query = 'さぬきマルシェ';
    const result = queryEventByKeyword(query, events);
    expect(result).toContain(event1);

    const query2 = '県産の銘柄肉';
    const result2 = queryEventByKeyword(query2, events);
    expect(result2).toContain(event2);

    const query3 = '産地直送';
    const result3 = queryEventByKeyword(query3, events);
    expect(result3).toContain(event3);
  }
);
