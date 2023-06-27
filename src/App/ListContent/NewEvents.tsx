import { Feature } from 'geojson';
import EventList from './EventList';
import CloseListButton from './CloseListButton';
import { queryEventByDate } from '../utils/queryEventByDate';

type Props = {
  events: Feature[];
  isPage: string | null;
  setIsPage: React.Dispatch<React.SetStateAction<string | null>>;
  setEventDetail: React.Dispatch<React.SetStateAction<Feature | null>>;
  closeListHandler: (event: any) => void
}

const Content = (props: Props) => {

  const { events, isPage, setIsPage, setEventDetail, closeListHandler } = props;

  const progressEvents = queryEventByDate(['today'], events);

  return (
    <>
      <div id="new-events">
        <div className="list-header">
          <img src="./img/list.svg" alt="イベントリスト" className='list-logo'/>
          <div className="title">イベントリスト</div>
          <CloseListButton closeListHandler={closeListHandler} />
        </div>
        <EventList events={progressEvents} isPage={isPage} setIsPage={setIsPage} setEventDetail={setEventDetail} />
      </div>
    </>
  );
}

export default Content;
