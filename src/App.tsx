import { useState, useRef, useEffect } from 'react';
import Header from './Header';
import Banner from './Banner';
import Map from './Map';
import List from './List';
import { Feature } from 'geojson';
import './App.css';

function App() {
  const [isPage, setIsPage] = useState<string | null>(null);
  const [events, setEvents] = useState<Feature[]>([]);
  const [clickedEvent, setClickedEvent] = useState<Feature | null>(null);
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
      <Banner events={events}/>
      <Map
        setIsPage={setIsPage}
        setClickedEvent={setClickedEvent}
        listRef={listRef}
      />
      <List
        setIsPage={setIsPage}
        isPage={isPage}
        listRef={listRef}
        events={events}
        clickedEvent={clickedEvent}
      />
    </div>
  );
}

export default App;
