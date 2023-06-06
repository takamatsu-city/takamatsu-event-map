import { useState } from 'react';
import Header from './Header';
import Banner from './Banner';
import Map from './Map';
import List from './List';
import './App.css';

function App() {
  const [isPage, setIsPage] = useState<string | null>(null);
  
  return (
    <div className="App">
      <Header />
      <Banner />
      <Map
        setIsPage={setIsPage}
      />
      <List
        isPage={isPage}
      />
    </div>
  );
}

export default App;
