import { useRef } from 'react';
import NewEvents from './ListContent/NewEvents';
import MarkerDetail from './ListContent/MarkerDetail';
import Search from './ListContent/Search';
import SearchResults from './ListContent/SearchResults';

type Props = {
  isPage: string | null;
}

const Content = (props: Props) => {
  let { isPage } = props;

  const listRef: React.MutableRefObject<HTMLDivElement| null> = useRef(null);

  const openListHandler = () => {
    if (listRef.current && !listRef.current.classList.contains('open')) {
      listRef.current.classList.add('open');
    }
  }

  const closeListHandler = (event:any) => {
    if (listRef.current && listRef.current.classList.contains('open')) {
      listRef.current.classList.remove('open');
      event.stopPropagation();
    }
  }

  return (
    <>
      <div id="list" ref={listRef} onClick={openListHandler}>
        <label id="list-close" onClick={closeListHandler}><span></span></label>
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