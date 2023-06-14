#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const raw = fs.readFileSync(path.resolve(__dirname, '../public/data.geojson'), 'utf8');
const geojson = JSON.parse(raw);

const rawStyle = fs.readFileSync(path.resolve(__dirname, '../public/style.json'), 'utf8');
const style = JSON.parse(rawStyle);

const areaMapping = {
  '多目的広場': 'takamatsu_square',
  '歩行者専用道路': 'takamatsu_pedestrian',
  '高松駅前広場': 'takamatsu_station_square',
  '玉藻公園': 'takamatsu_tamamo_park',
}

const filter = [ 'in', 'id' ];

// 全 feature の area プロパティに対して、areaMapping の key と一致するものを探し、一致したら 一度だけ areaMapping の value を filter に追加する。
Object.keys(areaMapping).forEach((key) => {

  const value = areaMapping[key];

  geojson.features.find((feature) => {
    if (feature.properties.area === key) {
      filter.push(value);
      return true;
    }
    return false;
  })
})

// takamatsu-fill-area id を持つレイヤーに対して、filter を設定する。
style.layers.find((layer) => {
  if (layer.id === 'takamatsu-fill-area' || layer.id === 'takamatsu-area-outline') {
    layer.filter = filter;
    return true;
  }
  return false;
})

fs.writeFileSync(path.resolve(__dirname, '../public/style.json'), JSON.stringify(style, null, 2));
