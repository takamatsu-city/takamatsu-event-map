import React from 'react';
import SearchControl from './SearchControl';
import { Feature } from 'geojson';

declare global {
  interface Window {
    // @ts-ignore
    geolonia: any;
  }
}

const style = {
  position: 'absolute',
  width: '100vw',
  height: '100vh',
} as React.CSSProperties;


type Props = {
  setIsPage: React.Dispatch<React.SetStateAction<string | null>>;
  setEvents: React.Dispatch<React.SetStateAction<Feature[]>>;
  listRef: React.MutableRefObject<HTMLDivElement | null>;
}

const Component = (props: Props) => {

  const { setIsPage, listRef, setEvents } = props;
  const mapContainer = React.useRef(null);

  React.useEffect(() => {

    if (!mapContainer.current) return;

    const map = new window.geolonia.Map({
      container: mapContainer.current,
      zoom: 13.81,
      center: [134.04937, 34.34965],
      // @ts-ignore
      style: `${process.env.PUBLIC_URL}/style.json`,
      localIdeographFontFamily: 'sans-serif'
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

    map.on('load', (e: any) => {

      map.on('click', (e: any) => {

        const features = map.queryRenderedFeatures(e.point);
        if (features.length > 0) {
          const feature = features[0];
          const layerId = feature.layer.id;

          if (layerId === 'takamatsuarea') {

            setEvents([feature]);
            setIsPage('marker');
            if (listRef.current && !listRef.current.classList.contains('open')) {
              listRef.current.classList.add('open');
            }
          }
        }
      })
    })
    
  }, [listRef, setEvents, setIsPage]);

  return (
    <>
      <div style={style} ref={mapContainer} data-navigation-control="off"/>
    </>
  );
}

export default Component;