import { useRef } from 'react';
import NewEvents from './ListContent/NewEvents';
import MarkerDetail from './ListContent/MarkerDetail';
import Search from './ListContent/Search';
import SearchResults from './ListContent/SearchResults';

const Content = (props: any) => {
  let { isPage } = props;

  const listRef: React.MutableRefObject<HTMLDivElement| null> = useRef(null);

  const listHandler = () => {
    if (listRef.current && !listRef.current.classList.contains('open')) {
      listRef.current.classList.add('open');
    } else {
      listRef.current?.classList.remove('open');
    }
  }

  return (
    <>
      <div id="list" ref={listRef} onClick={listHandler}>
        <label id="list-close"><span></span></label>
        <div id="list-content">
          {!isPage &&  <NewEvents />}
          {isPage === 'marker' && <MarkerDetail />}
          {isPage === 'search' && <Search />}
          {isPage === 'searchResults' && <SearchResults />}
        </div>
      </div>
    </>
  );
}

export default Content;