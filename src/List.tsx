import NewEvents from './ListContent/NewEvents';
import MarkerDetail from './ListContent/MarkerDetail';
import Search from './ListContent/Search';
import SearchResults from './ListContent/SearchResults';

const Content = (props: any) => {
  // const {} = props;
  
  return (
    <>
      <div id="list">
        <label id="list-close"><span></span></label>
        <div id="list-content">
          <NewEvents />
          <MarkerDetail />
          <Search />
          <SearchResults />
        </div>
      </div>
    </>
  );
}

export default Content;