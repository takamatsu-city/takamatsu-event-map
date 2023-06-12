import { Feature } from 'geojson';
import { EventProps } from '../utils/types';
import EventList from './EventList';

type Props = {
  events: Feature[];
  setIsPage: React.Dispatch<React.SetStateAction<string | null>>;
  setEventDetail: React.Dispatch<React.SetStateAction<Feature | null>>;
}

const Content = (props: Props) => {

  const { events, setIsPage, setEventDetail } = props;

  const progressEvents = events.filter((event) => {

    // @ts-ignore
    const properties: EventProps = event.properties;

    if (!properties.start_date || !properties.end_date) return false;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const startDate = new Date(properties.start_date);
    const endDate = new Date(properties.end_date);

    return (startDate <= today && today <= endDate);
  });

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
