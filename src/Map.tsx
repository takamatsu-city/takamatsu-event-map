import React from 'react';
import SearchControl from './SearchControl';
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


const Component = () => {
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
    map.addControl(new SearchControl(), 'bottom-right');

    map.on('load', () => {

    })
    
  });

  return (
    <>
      <div style={style} ref={mapContainer} data-navigation-control="off"/>
    </>
  );
}

export default Component;