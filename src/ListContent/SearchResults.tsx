import { useEffect, useState } from 'react';
import EventList from './EventList';
import { queryEventByDate } from '../utils/queryEventByDate';
import { queryEventByKeyword } from '../utils/queryEventByKeyword';
import { QueryDate } from '../utils/types';

import { Feature } from 'geojson';

type Props = {
  queryDate: QueryDate;
  queryKeyword: string;
  events: Feature[];
  setIsPage: React.Dispatch<React.SetStateAction<string | null>>;
  setEventDetail: React.Dispatch<React.SetStateAction<Feature | null>>;
}

const Content = (props: Props) => {
  const { queryDate, queryKeyword, events, setIsPage,  setEventDetail} = props;

  const [searchedEvents, setSearchedEvents] = useState<Feature[]>([]);

  useEffect(() => {

    const eventsFilterByDate = queryEventByDate(queryDate, events);
    const eventsSearchResult = queryEventByKeyword(queryKeyword, eventsFilterByDate);

    setSearchedEvents(eventsSearchResult);
  }, [queryDate, queryKeyword, events]);

  return (
    <>
      <div id="search-result">
        <div className="list-header">
          <div className="list-header-inner">
            <img src="./img/search.svg" alt="search icon" />
            <div className="list-header-title">
              <div className="list-header-title-main">検索結果</div>
              <div className="list-header-title-sub">{`${searchedEvents.length}件見つかりました`}</div>
            </div>
          </div>
        </div>
        <EventList events={searchedEvents} setIsPage={setIsPage} setEventDetail={setEventDetail} />
      </div>
    </>
  );
}

export default Content;
