#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const csv2geojson = require('csv2geojson');

const csvPath = path.join(__dirname, '../public/data.csv');
const geojsonPath = path.join(__dirname, '../public/data.geojson');

const csv = fs.readFileSync(csvPath, 'utf-8');

const categoryIconMapping = {
  '季節のイベント': 'takamatsu_season',
  'お祭り': 'takamatsu_uchiwa',
  '食事': 'takamatsu_eating',
  '買い物': 'takamatsu_shopping',
  '文化・芸術': 'takamatsu_art',
  '音楽': 'takamatsu_music',
  'スポーツ・ウェルネス': 'takamatsu_sports_blue',
  '趣味・生活': 'takamatsu_book',
  'キャリア・ビジネス': 'takamatsu_bag',
  'その他': 'takamatsu_other',
}

csv2geojson.csv2geojson(csv, {
  delimiter: ','
}, (err, geojson) => {
  if (err) {
    console.error(err);
    return;
  }

  const filteredFeatures = geojson.features = geojson.features.filter(feature => {
    const isPublish = '0'
    // TODO: キー名 nyuryoku_flg から BOM（U+feff） を削除
    return feature.properties.nyuryoku_flg === isPublish || feature.properties["﻿nyuryoku_flg"] === isPublish;
  });

  if (filteredFeatures.length === 0) {
    console.error('No data');
    return;
  }

  filteredFeatures.forEach((feature) => {

    // start_date と end_date のフォーマット 2023-06-06T00:00:00.000Z を 2023-06-06 に変換
    if (feature.properties.start_date) {
      feature.properties.start_date = feature.properties.start_date.slice(0, 10);
    }

    if (feature.properties.end_date) {
      feature.properties.end_date = feature.properties.end_date.slice(0, 10);
    }

    if (feature.properties.category) {
      feature.properties["marker-symbol"] = categoryIconMapping[feature.properties.category];
    }

    if (feature.geometry.type === 'Point') {
      feature.properties.lat = feature.geometry.coordinates[1];
      feature.properties.lon = feature.geometry.coordinates[0];
    }
  });

  geojson.features = filteredFeatures;

  fs.writeFileSync(geojsonPath, JSON.stringify(geojson));
});
