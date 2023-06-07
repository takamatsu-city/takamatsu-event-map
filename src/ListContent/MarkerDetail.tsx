import { Feature } from 'geojson';
import { EventProps } from '../utils/types';
import formatDate from '../utils/formatDate';

type Props = {
  events: Feature[];
}

const Content = (props: Props) => {
  const { events } = props;

  if (!events || events.length === 0) return <></>;

  // @ts-ignore
  const event: EventProps = events[0].properties;

  return (
    <>
      <div id="content2">
        {event.event_name && <div className="list-title">{event.event_name}</div>}
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
            event.description && (
              <li className="display-block">
                <div className="list-description">{event.description}</div>
                <div>
                  {
                    event.organizer && (
                      <div>
                        <span className="list-label">主催：</span>{event.organizer}
                      </div>
                    )
                  }
                  {
                    event.telephone_number && (
                      <div>
                        <span className="list-label">連絡先：</span>{event.telephone_number}
                      </div>
                    )
                  }
                </div>
              </li>
            )
          }
          {
            event.price_basic && (
              <li className="display-block">
                <div className="icon-container"><img src="./img/price.svg" alt="price icon" />1,500円</div>
                {event.price_detail && <span className="list-price-description">{event.price_detail}</span>}
              </li>
            )
          }
          {
            event.target && (
              <li>
                <img src="./img/target.svg" alt="target icon" />
                <div>{event.target}</div>
              </li>
            )
          }
          {
            event.address && (
              <li>
                <img src="./img/address.svg" alt="address icon" />
                <div>香川県高松市サンポート3-33</div>
              </li>
            )
          }
        </ul>
        <div className="list-footer-content">
          {
            event.lon && event.lat && (
              <a href={`https://www.google.com/maps/search/?api=1&query=${event.lat}%2C${event.lon}`} target="_blank" rel="noopener noreferrer">
                <div className="box">
                  <img src="./img/walk.svg" alt="walk icon" />
                  <div>ここへ行く</div>
                </div>
              </a>
            )
          }
          {
            event.url && (
              <a href={event.url} target="_blank" rel="noopener noreferrer">
                <div className="box walk">
                  <img src="./img/compass.svg" alt="compass icon" />
                  <div>Webサイト</div>
                </div>
              </a>)
          }
        </div>
      </div>
    </>
  );
}

export default Content;