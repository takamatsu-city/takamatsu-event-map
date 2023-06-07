#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const csv2geojson = require('csv2geojson');

const csvPath = path.join(__dirname, '../public/data.csv');
const geojsonPath = path.join(__dirname, '../public/data.geojson');

const csv = fs.readFileSync(csvPath, 'utf-8');

const categoryIconMapping = {
  '季節のイベント': 'season',
  'お祭り': 'uchiwa',
  '食事': 'eating',
  '買い物': 'shopping',
  '文化・芸術': 'art',
  '音楽': 'music',
  'スポーツ・ウェルネス': 'sports_blue',
  '趣味・生活': 'book',
  'キャリア・ビジネス': 'bag',
  'その他': 'other',
}

csv2geojson.csv2geojson(csv, {
  delimiter: ','
}, (err, geojson) => {
  if (err) {
    console.error(err);
    return;
  }

  geojson.features.forEach((feature) => {

    if (feature.properties.category) {
      feature.properties["marker-symbol"] = categoryIconMapping[feature.properties.category];
    }

    if (feature.geometry.type === 'Point') {
      feature.properties.lat = feature.geometry.coordinates[1];
      feature.properties.lon = feature.geometry.coordinates[0];
    }
  });
  
  // TODO: キー名 nyuryoku_flg から BOM（U+feff） を削除
  fs.writeFileSync(geojsonPath, JSON.stringify(geojson));
});