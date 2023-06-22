import { useEffect, useState } from 'react';
import formatDate from './utils/formatDate';
import { Feature, } from 'geojson';
import { today } from './utils/dates';

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

    const bannerEvents = events.filter((event: Feature) => {

      //  00:00:00 の今日の日付を取得
      const _today = new Date(today);
      // @ts-ignore
      const endDate = new Date(event.properties.end_date);

      if (endDate < _today || !event.properties) return false

      return event.properties.banner_flg === "1"
    })

    if (!bannerEvents || bannerEvents.length === 0) return;


    if (bannerEvents.length === 1) {

      setEvent(bannerEvents[0].properties);

    } else {

      let index = 0;
      setEvent(bannerEvents[index].properties);

      setInterval(() => {

        index++;

        if (index >= bannerEvents.length) {
          index = 0;
        }

        setEvent(bannerEvents[index].properties);

      }, 5000);
    }

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
