import React, { useEffect } from 'react';
import SearchControl from './SearchControl';
import { Feature } from 'geojson';
import geolonia from '@geolonia/embed';
import { queryEventByDate } from './utils/queryEventByDate';
import { showEventsOnMap } from './utils/showEventsOnMap';
import { setPolygonFilter } from './utils/setPolygonFilter';
import { fitBoundsToUpperScreen } from './utils/fitBoundsToUpperScreen';
import { setGa4Event } from './utils/setGa4Event';
import { getBboxFromLatLon } from './utils/getBboxFromLatLon';

declare global {
  interface Window {
    // @ts-ignore
    geolonia: any;
  }
}

const style = {
  position: 'absolute',
  width: '100%',
  height: '100%',
} as React.CSSProperties;


type Props = {
  setIsPage: React.Dispatch<React.SetStateAction<string | null>>;
  setClickedEvent: React.Dispatch<React.SetStateAction<Feature | null>>;
  setMapObject: React.Dispatch<React.SetStateAction<geolonia.Map | null>>;
  setIsBannerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  listRef: React.MutableRefObject<HTMLDivElement | null>;
  events: Feature[];
  mapObject: geolonia.Map | null;
}

const Component = (props: Props) => {

  const { listRef, events, mapObject, setIsPage, setClickedEvent, setMapObject, setIsBannerOpen } = props;
  const mapContainer = React.useRef(null);

  React.useEffect(() => {

    if (!mapContainer.current) return;

    const map = new window.geolonia.Map({
      container: mapContainer.current,
      zoom: 14.42,
      center: [134.04927, 34.35308],
      // @ts-ignore
      style: `${process.env.PUBLIC_URL}/style.json`,
      localIdeographFontFamily: 'sans-serif',
      minZoom: 11,
      maxZoom: 19
    })

    setMapObject(map);

    // @ts-ignore
    map.addControl(new window.geolonia.GeolocateControl(), 'bottom-right');

    const setSearchPage = () => {
      setIsPage('search');
      if (listRef.current && !listRef.current.classList.contains('open')) {
        listRef.current.classList.add('open');
        setIsBannerOpen(false);
      }
    }
    map.addControl(new SearchControl(setSearchPage), 'bottom-right');

  }, [listRef, setIsBannerOpen, setIsPage, setMapObject]);

  useEffect(() => {

    if (!mapObject) return;

    mapObject.once('load', (e: any) => {

      console.log('mapObject.on load');

      const progressEvents = queryEventByDate(['today'], events);
      showEventsOnMap(progressEvents, mapObject);
      setPolygonFilter(progressEvents, mapObject);

      mapObject.on('click', (e: any) => {

        console.log('mapObject.on click');


        const features = mapObject.queryRenderedFeatures(e.point);
        if (features.length > 0) {
          const feature = features[0];
          const layerId = feature.layer.id;

          if (layerId === 'takamatsuarea') {

            setClickedEvent(feature);
            setIsPage('marker');
            if (listRef.current && !listRef.current.classList.contains('open')) {
              listRef.current.classList.add('open');
              setIsBannerOpen(false);
            }

            // @ts-ignore
            const lng = feature.geometry.coordinates[0]
            // @ts-ignore
            const lat = feature.geometry.coordinates[1]

            const targetBbox = getBboxFromLatLon(lng, lat);

            fitBoundsToUpperScreen(targetBbox, mapObject);

            const { category, event_name } = feature.properties;
            setGa4Event(category, event_name);

          } else {

            setIsPage(null);
            showEventsOnMap(progressEvents, mapObject);
            if (listRef.current && listRef.current.classList.contains('open')) {
              listRef.current.classList.remove('open');
            }
          }
        }
      })
    })
  }, [events, listRef, mapObject, setClickedEvent, setIsBannerOpen, setIsPage]);

  return (
    <>
      <div style={style} ref={mapContainer} data-navigation-control="off" data-gesture-handling="off" />
    </>
  );
}

export default Component;
