import { Feature } from 'geojson';
import EventList from './EventList';
import { queryEventByDate } from '../utils/queryEventByDate';

type Props = {
  events: Feature[];
  setIsPage: React.Dispatch<React.SetStateAction<string | null>>;
  setEventDetail: React.Dispatch<React.SetStateAction<Feature | null>>;
}

const Content = (props: Props) => {

  const { events, setIsPage, setEventDetail } = props;

  const progressEvents = queryEventByDate(['today'], events);

  return (
    <>
      <div id="new-events">
        <div className="list-header">
          <i className="fa-sharp fa-solid fa-list"></i>
          <div className="title">イベントリスト</div>
        </div>
        <EventList events={progressEvents} setIsPage={setIsPage} setEventDetail={setEventDetail} />
      </div>
    </>
  );
}

export default Content;
