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
      zoom: 10,
      hash: true,
      style: "geolonia/basic",
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