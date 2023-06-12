import { queryEventByDate } from '../App/utils/queryEventByDate';
import { today, tomorrow, thisSaturday, nextSunday } from '../App/utils/dates';

const todayEvent = {
  properties : {
    start_date : today,
    end_date : today
  }
}

const tommorowEvent = {
  properties : {
    start_date : tomorrow,
    end_date : tomorrow
  }
}

const thisWeekendEvent = {
  properties : {
    start_date : thisSaturday,
    end_date : nextSunday
  }
}

const events = [todayEvent, tommorowEvent, thisWeekendEvent];

test('今日に開催しているイベントを取得する', () => {
  const query = ['today'];
  const result = queryEventByDate(query, events);
  expect(result).toContain(todayEvent);
});

test('明日に開催しているイベントを取得する', () => {
  const query = ['tomorrow'];
  const result = queryEventByDate(query, events);
  expect(result).toContain(tommorowEvent);
});

test('今週末に開催しているイベントを取得する', () => {
  const query = ['weekend'];
  const result = queryEventByDate(query, events);
  expect(result).toContain(thisWeekendEvent);
});

test('今日と明日と週末に開催しているイベントを取得する', () => {
  const query = ['today', 'tomorrow', 'weekend'];
  const result = queryEventByDate(query, events);
  expect(result).toContain(todayEvent);
  expect(result).toContain(tommorowEvent);
  expect(result).toContain(thisWeekendEvent);
})
