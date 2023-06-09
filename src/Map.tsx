import React from 'react';
import SearchControl from './SearchControl';
import { Feature } from 'geojson';
import geolonia from '@geolonia/embed';

declare global {
  interface Window {
    // @ts-ignore
    geolonia: any;
  }
}

const style = {
  position: 'absolute',
  width: '100vw',
  height: '100%',
} as React.CSSProperties;


type Props = {
  setIsPage: React.Dispatch<React.SetStateAction<string | null>>;
  setClickedEvent: React.Dispatch<React.SetStateAction<Feature | null>>;
  setMapObject: React.Dispatch<React.SetStateAction<geolonia.Map | null>>;
  listRef: React.MutableRefObject<HTMLDivElement | null>;
}

const Component = (props: Props) => {

  const { setIsPage, listRef, setClickedEvent, setMapObject } = props;
  const mapContainer = React.useRef(null);

  React.useEffect(() => {

    if (!mapContainer.current) return;

    const map = new window.geolonia.Map({
      container: mapContainer.current,
      zoom: 13.81,
      center: [134.04937, 34.34965],
      // @ts-ignore
      style: `${process.env.PUBLIC_URL}/style.json`,
      localIdeographFontFamily: 'sans-serif',
    })

    // @ts-ignore
    map.addControl(new window.geolonia.GeolocateControl(), 'bottom-right');

    const setSearchPage = () => {
      setIsPage('search');
      if (listRef.current && !listRef.current.classList.contains('open')) {
        listRef.current.classList.add('open');
      }
    }
    map.addControl(new SearchControl(setSearchPage), 'bottom-right');

    setMapObject(map);

    map.on('load', (e: any) => {

      map.on('click', (e: any) => {

        const features = map.queryRenderedFeatures(e.point);
        if (features.length > 0) {
          const feature = features[0];
          const layerId = feature.layer.id;

          if (layerId === 'takamatsuarea') {

            setClickedEvent(feature);
            setIsPage('marker');
            if (listRef.current && !listRef.current.classList.contains('open')) {
              listRef.current.classList.add('open');
            }
          } else {

            setIsPage(null);
            map.setFilter('takamatsuarea', null);
            if (listRef.current && listRef.current.classList.contains('open')) {
              listRef.current.classList.remove('open');
            }
          }
        }
      })
    })

  }, [listRef, setClickedEvent, setIsPage, setMapObject]);

  return (
    <>
      <div style={style} ref={mapContainer} data-navigation-control="off" data-gesture-handling="off"/>
    </>
  );
}

export default Component;