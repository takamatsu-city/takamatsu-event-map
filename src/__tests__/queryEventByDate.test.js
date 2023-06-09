import { queryEventByDate } from '../utils/queryEventByDate';

// 現在の日を 2023-06-07 の形式で取得
const format = (date) => {
  return date.toISOString().slice(0, 10);
}

const today = new Date();
today.setHours(0, 0, 0, 0)
today.setHours(today.getHours() + 9);

const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

const thisSaturday = new Date(today);
thisSaturday.setDate(thisSaturday.getDate() + (6 - thisSaturday.getDay()));

const nextSunday = new Date(thisSaturday);
nextSunday.setDate(nextSunday.getDate() + 1);

const todayEvent = {
  properties : {
    start_date : format(today),
    end_date : format(today)
  }
}

const tommorowEvent = {
  properties : {
    start_date : format(tomorrow),
    end_date : format(tomorrow)
  }
}

const thisWeekendEvent = {
  properties : {
    start_date : format(thisSaturday),
    end_date : format(nextSunday)
  }
}

// const querykeys = ['today', 'tomorrow', 'weekend'];
const events = [todayEvent, tommorowEvent, thisWeekendEvent];

// queryKeys で指定された日にちのどれかが、events の start_date と end_date の間にあるかどうかをチェックする。当てはまるイベントオブジェクトを返す。

test('queryEventByDate(today, queryKeys, events) は、events の中に今日の日付があるかどうかをチェックする', () => {

  const query = ['today'];
  const result = queryEventByDate(today, query, events);
  expect(result.length).toEqual(1);
});





