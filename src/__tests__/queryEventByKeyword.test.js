const { queryEventByKeyword } = require('../utils/queryEventByKeyword');

const event1 = {
  properties : {
    tag: "食事、買い物、遊び"
  }
}
const event2 = {
  properties : {
    tag: "オリーブ豚、祭り"
  }
}
const event3 = {
  properties : {
    tag: "マルシェ、スイーツ"
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
