import { useEffect, useState, useRef } from 'react';
import formatDate from './utils/formatDate';
import { Feature, } from 'geojson';
import { today } from './utils/dates';
import './Banner.scss';

type Props = {
  events: Feature[],
}

const Content = (props: Props) => {
  const { events } = props;
  const [event, setEvent] = useState<any | null>(null);
  const [checked, setChecked] = useState<boolean>(true);
  const guidePanelContent = useRef<HTMLDivElement>(null);
  const guidePanelContentLink = useRef<HTMLAnchorElement>(null);

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

  useEffect(() => {

    if (!guidePanelContent.current || !guidePanelContentLink.current || !event) return;

    if (checked) {
      guidePanelContent.current.style.top = `${guidePanelContentLink.current.clientHeight + 10}px`;
    } else {
      guidePanelContent.current.style.top = `0px`;
    }

  // バナーに表示している event が変化するたびにバナーの高さを再計算する
  }, [guidePanelContent, event, checked])

  const handleCheck = () => {
    setChecked(!checked);
  }

  return (
    <>
      {
        event && <div id="guide-panel">
          <input onChange={handleCheck} type="checkbox" id="guide-panel-check" className="guide-panel-hidden" defaultChecked />
          <div ref={guidePanelContent} className="guide-panel-content">
            <a ref={guidePanelContentLink} href={event.url} target="_blank" rel="noopener noreferrer">
              {event.event_name && <div className="banner-title">{event.event_name}</div>}
              {(event.start_date && event.end_date) && <div className="banner-period">{`${formatDate(event.start_date)}-${formatDate(event.end_date)}`}</div>}
              {event.description && <div className="banner-description">{event.description}</div>}
            </a>
            <label htmlFor="guide-panel-check" className="guide-panel-open guide-panel-button">
              <i className="arrow down"></i>
            </label>
          </div>
        </div>
      }
    </>
  )
}

export default Content;
