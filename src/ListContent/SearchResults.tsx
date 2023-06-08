import { useEffect, useState } from 'react';
import { Feature } from 'geojson';

type Props = {
  queryDate: string;
  queryKeyword: string;
  events: Feature[];
}

const Content = (props: Props) => {
  const { queryDate, queryKeyword, events } = props;

  const [filteredEvents, setFilteredEvents] = useState<Feature[]>([]);

  useEffect(() => {
    const filteredEvents = events.filter((event) => {
      const eventDate = new Date(event.properties?.date as string);
      const today = new Date();
      const tomorrow = new Date();
      tomorrow.setDate(today.getDate() + 1);
      const weekend = new Date();
      weekend.setDate(today.getDate() + (6 - today.getDay() + 7) % 7 + 1);

      if (queryDate === '1') {
        return eventDate.getDate() === today.getDate();
      } else if (queryDate === '2') {
        return eventDate.getDate() === tomorrow.getDate();
      } else if (queryDate === '3') {
        return eventDate.getDate() === weekend.getDate();
      } else {
        return true;
      }

    }).filter((event) => {
      const keyword = queryKeyword.toLowerCase();
      const title = event.properties?.title as string;
      const description = event.properties?.description as string;
      const category = event.properties?.category as string;

      return title.toLowerCase().includes(keyword) || description.toLowerCase().includes(keyword) || category.toLowerCase().includes(keyword);
    });

    setFilteredEvents(filteredEvents);
  }, [queryDate, queryKeyword, events]);

  return (
    <>
      <div id="search-result">
        <div className="list-header">
          <div className="list-header-inner">
            <img src="./img/sports.svg" alt="sports icon" />
            <div className="list-header-title">
              <div className="list-header-title-main">スポーツ・ウェルネス</div>
              <div className="list-header-title-sub">4件見つかりました</div>
            </div>
          </div>
          <div className="category-content">
            <div className="category-label active">音楽</div>
            <div className="category-label">ミュージック</div>
            <div className="category-label">ブルーフェス</div>
          </div>
        </div>
        <div className="list-section">
          <div className="list-title">BOULANGERIE PATISSERIE Risum（ブーランジェリー パティスリー リズム）</div>
          <div className="list-sub-title">スポーツ・ウェルネス</div>
          <div className="list-period">2022.05.05-2022.05.05</div>
          <ul>
            <li>
              <img src="./img/time.svg" alt="time icon" />
              <div>14:00~ 19:00</div>
            </li>
            <li>
              <img src="./img/place.svg" alt="place icon" />
              <div>サンポート高松 多目的広場 石のステージ</div>
            </li>
            <li>
              <img src="./img/transport.svg" alt="transport icon" />
              <div>JR高松駅から徒歩3分</div>
            </li>
            <li>
              <div className="icon-container"><img src="./img/price.svg" alt="price icon" />1,500円</div>
              <div className="icon-container"><img src="./img/target.svg" alt="target icon" />家族</div>
            </li>
          </ul>
        </div>
        <div className="list-section">
          <div className="list-title">BOULANGERIE PATISSERIE Risum（ブーランジェリー パティスリー リズム）</div>
          <div className="list-sub-title">スポーツ・ウェルネス</div>
          <div className="list-period">2022.05.05-2022.05.05</div>
          <ul>
            <li>
              <img src="./img/time.svg" alt="time icon" />
              <div>14:00~ 19:00</div>
            </li>
            <li>
              <img src="./img/place.svg" alt="place icon" />
              <div>サンポート高松 多目的広場 石のステージ</div>
            </li>
            <li>
              <img src="./img/transport.svg" alt="transport icon" />
              <div>JR高松駅から徒歩3分</div>
            </li>
            <li>
              <div className="icon-container"><img src="./img/price.svg" alt="price icon" />1,500円</div>
              <div className="icon-container"><img src="./img/target.svg" alt="target icon" />家族</div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Content;
