import { useEffect, useState } from 'react';
import EventList from './EventList';
import { queryEventByDate } from '../utils/queryEventByDate';
import { queryEventByKeyword } from '../utils/queryEventByKeyword';
import { showEventsOnMap } from '../utils/showEventsOnMap';
import { setPolygonFilter } from '../utils/setPolygonFilter';
import { QueryDate } from '../utils/types';
import { Feature } from 'geojson';
import geolonia from '@geolonia/embed';
import bbox from '@turf/bbox';

type Props = {
  queryDate: QueryDate;
  queryKeyword: string;
  events: Feature[];
  mapObject: geolonia.Map | null;
  setIsPage: React.Dispatch<React.SetStateAction<string | null>>;
  setEventDetail: React.Dispatch<React.SetStateAction<Feature | null>>;
}

const Content = (props: Props) => {
  const { queryDate, queryKeyword, events, mapObject, setIsPage, setEventDetail } = props;

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

    const app = document.getElementsByClassName('app')[0]
    const screenHeight = app.clientHeight;

    const listHeightRatio = 0.6;
    const listHeight = screenHeight * listHeightRatio;

    const headerHeight = 50;
    const padding = 50;

    // @ts-ignore
    mapObject.fitBounds(targetBbox, {
      padding: {
        top: padding + headerHeight,
        bottom: listHeight + padding,
        left: padding,
        right: padding
      }
    });

  }, [queryDate, queryKeyword, events, mapObject]);

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
