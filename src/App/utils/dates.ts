const _today = new Date();
_today.setHours(0, 0, 0, 0)
_today.setHours(_today.getHours() + 9);

const _tomorrow = new Date(_today);
_tomorrow.setDate(_tomorrow.getDate() + 1);

const _thisSaturday = new Date(_today);
_thisSaturday.setDate(_thisSaturday.getDate() + (6 - _thisSaturday.getDay()));

const _nextSunday = new Date(_thisSaturday);
_nextSunday.setDate(_nextSunday.getDate() + 1);

// 現在の日を 2023-06-07 の形式で取得
const format = (date: Date) => {
  return date.toISOString().slice(0, 10);
}

export const today: string = format(_today);
export const tomorrow: string = format(_tomorrow);
export const thisSaturday: string = format(_thisSaturday);
export const nextSunday: string = format(_nextSunday);
