import { EventProps } from "./types"
import { Feature } from "geojson"

export const queryEventByKeyword = (keyword: string, events: Feature[]) => {

  // keyword が　tag に含まれるイベントを返す
  return events.filter((event) => {

    const properties = event.properties as EventProps
    let tag = properties.tag;
    let event_name = properties.event_name;
    let description = properties.description;

    if (!tag || !event_name) return false

    return (
      tag.replace(/\r?\n/g, '').includes(keyword) ||
      event_name.replace(/\r?\n/g, '').includes(keyword) ||
      description.replace(/\r?\n/g, '').includes(keyword)
    )
  })
}

