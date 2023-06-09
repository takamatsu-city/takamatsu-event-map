import { EventProps } from "./types"
import { Feature } from "geojson"

export const queryEventByKeyword = (keyword: string, events: Feature[]) => {

  // keyword が　tag に含まれるイベントを返す
  return events.filter((event) => {

    const properties = event.properties as EventProps
    const tag = properties.tag

    if (!tag) return false

    return tag.toLowerCase().includes(keyword.toLowerCase())
  })
}
