import { useEffect, useState } from 'react';
import formatDate from './utils/formatDate';
import { Feature } from 'geojson';

type Props = {
  events: Feature[],
}

const Content = (props: Props) => {
  const { events } = props;
  const [isOpen, setIsOpen] = useState(true);
  const [event, setEvent] = useState<Feature | null>(null);
  const [displayEvents, setDisplayEvents] = useState<Feature[]>([]);

  const closeHandler = () => {
    setIsOpen(false);
  }

  useEffect(() => {

    if (!events || events.length === 0) return;

    const displayEvents = events.filter((event: Feature) => {
      if (!event.properties) return false
      return event.properties.banner_flg === "1"
    })

    setEvent(displayEvents[0]);
    setDisplayEvents(displayEvents);

  }, [events]);

  setInterval(() => {

    if (displayEvents.length === 0) return;

    let currentIndex

    if (event) {
      currentIndex = displayEvents.indexOf(event);
    } else {
      currentIndex = 0;
    }

    const nextIndex = currentIndex + 1;
    const nextEvent = displayEvents[nextIndex];

    if (nextEvent) {
      setEvent(nextEvent);
    } else {
      setEvent(displayEvents[0]);
    }

  }, 5000);

  return (
    <>
      {
        (isOpen && event && event.properties) && <div id="banner">
          <label id="banner-close" onClick={closeHandler}><span></span></label>
          <a href={event.properties.url} target="_blank" rel="noopener noreferrer">
            {event.properties.event_name && <div className="banner-title">{event.properties.event_name}</div>}
            {(event.properties.start_date && event.properties.end_date) && <div className="banner-period">{`${formatDate(event.properties.start_date)}-${formatDate(event.properties.end_date)}`}</div>}
            {event.properties.description && <div className="banner-description">{event.properties.description}</div>}
          </a>
        </div>
      }
    </>
  );
}

export default Content;