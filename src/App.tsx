import { useState, useRef } from 'react';
import Header from './Header';
import Banner from './Banner';
import Map from './Map';
import List from './List';
import { Feature } from 'geojson';
import './App.css';

function App() {
  const [isPage, setIsPage] = useState<string | null>(null);
  // TODO: GeoJSON の Features の型を指定する
  const [events, setEvents] = useState<Feature[]>([]);
  const listRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);
  
  return (
    <div className="App">
      <Header />
      <Banner />
      <Map
        setIsPage={setIsPage}
        setEvents={setEvents}
        listRef={listRef}
      />
      <List
        setIsPage={setIsPage}
        isPage={isPage}
        listRef={listRef}
        events={events}
      />
    </div>
  );
}

export default App;
