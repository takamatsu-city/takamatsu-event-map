import { useEffect, useState } from 'react';
import EventList from './EventList';
import { queryEventByDate } from '../utils/queryEventByDate';
import { queryEventByKeyword } from '../utils/queryEventByKeyword';
import { showEventsOnMap } from '../utils/showEventsOnMap';
import { setPolygonFilter } from '../utils/setPolygonFilter';
import { fitBoundsToUpperScreen } from '../utils/fitBoundsToUpperScreen';
import { QueryDate } from '../utils/types';
import { Feature } from 'geojson';
import geolonia from '@geolonia/embed';
import bbox from '@turf/bbox';
import CloseListButton from './CloseListButton';

type Props = {
  queryDate: QueryDate;
  queryKeyword: string;
  events: Feature[];
  mapObject: geolonia.Map | null;
  isPage: string | null;
  setIsPage: React.Dispatch<React.SetStateAction<string | null>>;
  setEventDetail: React.Dispatch<React.SetStateAction<Feature | null>>;
  closeListHandler: (event: any) => void
}

const Content = (props: Props) => {
  const { queryDate, queryKeyword, events, isPage, mapObject, setIsPage, setEventDetail, closeListHandler} = props;

  const [searchedEvents, setSearchedEvents] = useState<Feature[]>([]);

  useEffect(() => {

    const eventsFilterByDate = queryEventByDate(queryDate, events);
    const eventsSearchResult = queryEventByKeyword(queryKeyword, eventsFilterByDate);

    setSearchedEvents(eventsSearchResult);
    showEventsOnMap(eventsSearchResult, mapObject)
    setPolygonFilter(eventsSearchResult, mapObject);

    const geojson = {
      type: 'FeatureCollection',
      features: eventsSearchResult
    }

    if (!mapObject || eventsSearchResult.length === 0) return;

    const targetBbox = bbox(geojson);
    fitBoundsToUpperScreen(targetBbox, mapObject);

  }, [queryDate, queryKeyword, events, mapObject]);

  return (
    <>
      <div id="search-result">
        <div className="list-header">
          <CloseListButton closeListHandler={closeListHandler} />
          <div className="list-header-inner">
            <img src="./img/search.svg" alt="search icon" />
            <div className="list-header-title">
              <div className="list-header-title-main">検索結果</div>
              <div className="list-header-title-sub">{`${searchedEvents.length}件見つかりました`}</div>
            </div>
          </div>
        </div>
        <EventList events={searchedEvents} setIsPage={setIsPage} isPage={isPage} setEventDetail={setEventDetail} />
      </div>
    </>
  );
}

export default Content;
