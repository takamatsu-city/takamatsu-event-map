import { EventProps } from "./types"
import { Feature } from "geojson"
import { Map } from "@geolonia/embed"

export const showEventsOnMap = (events: Feature[], mapObject: Map | null) => {

  if (!mapObject || mapObject.getLayer('takamatsuarea') === undefined) return;

  const ids = events.map((event) => {
    const properties = event.properties as EventProps;
    return properties.id;
  });

  const filter = ['in', 'id']
  filter.push(...ids);

  // @ts-ignore
  mapObject.setFilter('takamatsuarea', filter);
  mapObject.setLayoutProperty('takamatsuarea', 'visibility', 'visible');
}
