import { Feature } from 'geojson';
import { today, tomorrow, thisSaturday, nextSunday } from './dates';

type QueryDate = [
  'today' | 'tomorrow' | 'weekend',
] | [];

export const queryEventByDate = (query: QueryDate, events: Feature[]) => {

  if (query.length === 0) return [];

  return events.filter((event) => {

    const start_date = event.properties?.start_date;
    const end_date = event.properties?.end_date;

    if (query.includes('today')) {
      if (start_date <= today && today <= end_date) {
        return true;
      }
    }

    if (query.includes('tomorrow')) {
      if (start_date <= tomorrow && tomorrow <= end_date) {
        return true;
      }
    }

    if (query.includes('weekend')) {
      if (start_date <= thisSaturday && thisSaturday <= end_date) {
        return true;
      }
      if (start_date <= nextSunday && nextSunday <= end_date) {
        return true;
      }
    }

    return false;
  })
}
