import { useEffect, useState } from 'react';
import formatDate from './utils/formatDate';
import { Feature,  } from 'geojson';

type Props = {
  events: Feature[],
}

const Content = (props: Props) => {
  const { events } = props;
  const [isOpen, setIsOpen] = useState(true);
  const [event, setEvent] = useState<any | null>(null);

  const closeHandler = () => {
    setIsOpen(false);
  }

  useEffect(() => {

    if (!events || events.length === 0) return;

    const displayEvents = events.filter((event: Feature) => {
      if (!event.properties) return false
      return event.properties.banner_flg === "1"
    })

    if (!displayEvents || displayEvents.length === 0) return;

    // @ts-ignore
    setEvent(displayEvents[0].properties);
  }, [events]);

  return (
    <>
      {
        (isOpen && event) && <div id="banner">
          <label id="banner-close" onClick={closeHandler}><span></span></label>
          <a href={event.url} target="_blank" rel="noopener noreferrer">
            {event.event_name && <div className="banner-title">{event.event_name}</div>}
            {(event.start_date && event.end_date) && <div className="banner-period">{`${formatDate(event.start_date)}-${formatDate(event.end_date)}`}</div>}
            {event.description && <div className="banner-description">{event.description}</div>}
          </a>
        </div>
      }
    </>
  );
}

export default Content;