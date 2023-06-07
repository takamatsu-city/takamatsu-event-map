import NewEvents from './ListContent/NewEvents';
import MarkerDetail from './ListContent/MarkerDetail';
import Search from './ListContent/Search';
import SearchResults from './ListContent/SearchResults';
import { Feature } from 'geojson';

type Props = {
  isPage: string | null;
  listRef: React.MutableRefObject<HTMLDivElement| null>;
  events: Feature[],
  setIsPage: React.Dispatch<React.SetStateAction<string | null>>;
}

const Content = (props: Props) => {
  const { isPage, listRef, events, setIsPage } = props;

  const openListHandler = () => {
    if (listRef.current && !listRef.current.classList.contains('open')) {
      listRef.current.classList.add('open');
    }
  }

  const closeListHandler = (event:any) => {
    if (listRef.current && listRef.current.classList.contains('open')) {
      listRef.current.classList.remove('open');
      setIsPage(null);
      event.stopPropagation();
    }
  }

  return (
    <>
      <div id="list" ref={listRef} onClick={openListHandler}>
        <label id="list-close" onClick={closeListHandler}><span></span></label>
        <div id="list-content">
          {!isPage &&  <NewEvents />}
          {isPage === 'marker' && <MarkerDetail events={events} />}
          {isPage === 'search' && <Search />}
          {isPage === 'searchResults' && <SearchResults />}
        </div>
      </div>
    </>
  );
}

export default Content;