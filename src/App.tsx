import { useState, useRef } from 'react';
import Header from './Header';
import Banner from './Banner';
import Map from './Map';
import List from './List';
import './App.css';

function App() {
  const [isPage, setIsPage] = useState<string | null>(null);
  const listRef: React.MutableRefObject<HTMLDivElement| null> = useRef(null);
  
  return (
    <div className="App">
      <Header />
      <Banner />
      <Map
        setIsPage={setIsPage}
        listRef={listRef}
      />
      <List
        setIsPage={setIsPage}
        isPage={isPage}
        listRef={listRef}
      />
    </div>
  );
}

export default App;
