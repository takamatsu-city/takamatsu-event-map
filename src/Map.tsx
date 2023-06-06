import React from 'react';
declare global {
  interface Window {
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
    const map = new window.geolonia.Map({
      container: mapContainer.current,
      zoom: 13.81,
      center: [134.04937, 34.34965],
      style: `${process.env.PUBLIC_URL}/style.json`,
      localIdeographFontFamily: 'sans-serif'
    })

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