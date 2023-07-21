export const getBboxFromLatLon = (lng: number, lat: number) => {

  const size = 0.0000001 // 1.4cm
  // クリックした地点から 1.4cm 四方の bbox を作成
  const targetBbox = [
    lng - size,
    lat - size,
    lng + size,
    lat + size
  ];

  return targetBbox
}
