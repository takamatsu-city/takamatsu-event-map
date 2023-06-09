import { Feature } from "geojson"

export const queryEventByKeyword = (keyword: string, events: Feature[]) => {

  // keyword が　tag に含まれるイベントを返す
  return events.filter((event) => {

    const tag = event.properties?.tag

    if (!tag) return false

    return tag.toLowerCase().includes(keyword.toLowerCase())
  })
}
