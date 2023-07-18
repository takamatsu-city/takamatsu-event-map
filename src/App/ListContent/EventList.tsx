import { Feature } from 'geojson';
import { EventProps } from '../utils/types';
import formatDate from '../utils/formatDate';
import { targetIcon } from '../utils/targetIcon';
import { setGa4Event } from '../utils/setGa4Event';

type Props = {
  events: Feature[];
  isPage: string | null;
  setIsPage: React.Dispatch<React.SetStateAction<string | null>>;
  setEventDetail: React.Dispatch<React.SetStateAction<Feature | null>>;
}

const Content = (props: Props) => {

  const { events, isPage, setIsPage, setEventDetail } = props;

  // start_date でソート
  events.sort((a, b) => {
    // @ts-ignore
    const aDate = new Date(a.properties.start_date);
    // @ts-ignore
    const bDate = new Date(b.properties.start_date);
    return aDate.getTime() - bDate.getTime();
  });

  const openDetailHandler = (feature: Feature) => {
    setEventDetail(feature);

    if (isPage === 'searchResults') {
      setIsPage('searchResultDetail');
    } else {
      setIsPage('eventDetail');
    }

    const { category, event_name } = feature.properties as EventProps;
    setGa4Event(category, event_name);
  }

  return (
    <>
      {
        events && events.length > 0 ? (
          // @ts-ignore
          events.map((feature, index) => {

            // @ts-ignore
            const event: EventProps = feature.properties;
            return (
              <div className="list-section" key={index} onClick={() => openDetailHandler(feature)}>
                {event.event_name && <div className="list-title">{event.event_name}</div>}
                {event.category && <div className="list-sub-title">{event.category}</div>}
                {(event.start_date && event.end_date) && <div className="list-period">{`${formatDate(event.start_date)}-${formatDate(event.end_date)}`}</div>}
                <ul>
                  {
                    event.start_time && event.end_time && (
                      <li>
                        <img src="./img/time.svg" alt="time icon" />
                        <div>{`${event.start_time} ~ ${event.end_time}`}</div>
                      </li>
                    )
                  }
                  {
                    event.place_name && (
                      <li>
                        <img src="./img/place.svg" alt="place icon" />
                        <div>{event.place_name}</div>
                      </li>
                    )
                  }
                  {
                    event.access && (
                      <li>
                        <img src="./img/transport.svg" alt="transport icon" />
                        <div>{event.access}</div>
                      </li>
                    )
                  }
                  {
                    event.price_basic && event.target && (
                      <li>
                        <div className="icon-container"><img src="./img/price.svg" alt="price icon" />{event.price_basic}円</div>
                        <div className="icon-container"><img src={targetIcon(event.target)} alt="target icon" />{event.target}</div>
                      </li>
                    )
                  }
                </ul>
              </div>
            )
          })
        ) : (
          <div className="list-section">
            <div className="list-title">該当するイベントは見つかりませんでした。</div>
          </div>
        )
      }
    </>
  );
}

export default Content;
