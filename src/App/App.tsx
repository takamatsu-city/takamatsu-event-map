import { useState, useRef, useEffect } from 'react';
import Header from './Header';
import Banner from './Banner';
import Map from './Map';
import List from './List';
import { Feature } from 'geojson';
import geolonia from '@geolonia/embed';

function App() {
  const [isPage, setIsPage] = useState<string | null>(null);
  const [events, setEvents] = useState<Feature[]>([]);
  const [clickedEvent, setClickedEvent] = useState<Feature | null>(null);
  const [mapObject, setMapObject] = useState<geolonia.Map | null>(null);
  const [isBannerOpen, setIsBannerOpen] = useState<boolean>(true);

  const listRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    const fetchEvents = async () => {
      const url = `${process.env.PUBLIC_URL}/data.geojson`
      const response = await fetch(url);
      const data = await response.json();
      setEvents(data.features);
    }
    fetchEvents();
  }, []);

  return (
    <div className="App">
      <Header />
      <Banner
        events={events}
        isBannerOpen={isBannerOpen}
        setIsBannerOpen={setIsBannerOpen}
      />
      <Map
        setIsPage={setIsPage}
        setClickedEvent={setClickedEvent}
        setMapObject={setMapObject}
        setIsBannerOpen={setIsBannerOpen}
        listRef={listRef}
        events={events}
        mapObject={mapObject}
      />
      <List
        setIsPage={setIsPage}
        setIsBannerOpen={setIsBannerOpen}
        isPage={isPage}
        listRef={listRef}
        events={events}
        clickedEvent={clickedEvent}
        mapObject={mapObject}
      />
    </div>
  );
}

export default App;
