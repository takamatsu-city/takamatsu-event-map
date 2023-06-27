import { Feature } from 'geojson';
import { EventProps } from '../utils/types';
import formatDate from '../utils/formatDate';
import { targetIcon } from '../utils/targetIcon';
import CloseListButton from './CloseListButton';

type Props = {
  event: Feature | null;
  closeListHandler: (event: any) => void
}

const Content = (props: Props) => {
  const { event, closeListHandler } = props;

  if (!event) return <></>;

  // @ts-ignore
  const eventData: EventProps = event.properties;

  return (
    <>
      <div id="content2">
        <CloseListButton closeListHandler={closeListHandler} />
        {eventData.event_name && <div className="list-title">{eventData.event_name}</div>}
        {(eventData.start_date && eventData.end_date) && <div className="list-period">{`${formatDate(eventData.start_date)}-${formatDate(eventData.end_date)}`}</div>}
        <ul>
          {
            eventData.start_time && eventData.end_time && (
              <li>
                <img src="./img/time.svg" alt="time icon" />
                <div>{`${eventData.start_time} ~ ${eventData.end_time}`}</div>
              </li>
            )
          }
          {
            eventData.place_name && (
              <li>
                <img src="./img/place.svg" alt="place icon" />
                <div>{eventData.place_name}</div>
              </li>
            )
          }
          {
            eventData.access && (
              <li>
                <img src="./img/transport.svg" alt="transport icon" />
                <div>{eventData.access}</div>
              </li>
            )
          }
          {
            eventData.description && (
              <li className="display-block">
                <div className="list-description">{eventData.description}</div>
                <div>
                  {
                    eventData.organizer && (
                      <div>
                        <span className="list-label">主催：</span>{eventData.organizer}
                      </div>
                    )
                  }
                  {
                    eventData.telephone_number && (
                      <div>
                        <span className="list-label">連絡先：</span><a href={`tel:${eventData.telephone_number}`}>{eventData.telephone_number}</a>
                      </div>
                    )
                  }
                </div>
              </li>
            )
          }
          {
            eventData.price_basic && (
              <li className="display-block">
                <div className="icon-container"><img src="./img/price.svg" alt="price icon" />{eventData.price_basic}円</div>
                {eventData.price_detail && <span className="list-price-description">{eventData.price_detail}</span>}
              </li>
            )
          }
          {
            eventData.target && (
              <li>
                <img src={targetIcon(eventData.target)} alt="target icon" />
                <div>{eventData.target}</div>
              </li>
            )
          }
          {
            eventData.address && (
              <li>
                <img src="./img/address.svg" alt="address icon" />
                <div>{eventData.address}</div>
              </li>
            )
          }
        </ul>
        <div className="list-footer-content">
          {
            eventData.lon && eventData.lat && (
              <a href={`https://www.google.com/maps/search/?api=1&query=${eventData.lat}%2C${eventData.lon}`} target="_blank" rel="noopener noreferrer">
                <div className="box">
                  <img src="./img/walk.svg" alt="walk icon" />
                  <div>ここへ行く</div>
                </div>
              </a>
            )
          }
          {
            eventData.url && (
              <a href={eventData.url} target="_blank" rel="noopener noreferrer">
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
