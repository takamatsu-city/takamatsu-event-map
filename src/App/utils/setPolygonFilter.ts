import { Feature } from "geojson"
import { Map} from "@geolonia/embed"

const areaMapping:{[key: string]: string} = {
  '多目的広場': 'takamatsu_square',
  '歩行者専用道路': 'takamatsu_pedestrian',
  '高松駅前広場': 'takamatsu_station_square',
  '玉藻公園': 'takamatsu_tamamo_park',
}

export const setPolygonFilter = (events: Feature[], map: Map | null) => {

  if (!map) return;

  const filter = ['in', 'id']

  // 全 feature の area プロパティに対して、areaMapping の key と一致するものを探し、一致したら 一度だけ areaMapping の value を filter に追加する。
  Object.keys(areaMapping).forEach((key) => {

    const value = areaMapping[key];

    events.find((feature) => {
      if (feature.properties && feature.properties.area === key) {
        filter.push(value);
        return true;
      }
      return false;
    })
  })

  // @ts-ignore
  map.setFilter('takamatsu-fill-area', filter);
  map.setLayoutProperty('takamatsu-fill-area', 'visibility', 'visible');
  // @ts-ignore
  map.setFilter('takamatsu-area-outline', filter);
  map.setLayoutProperty('takamatsu-area-outline', 'visibility', 'visible');
}
