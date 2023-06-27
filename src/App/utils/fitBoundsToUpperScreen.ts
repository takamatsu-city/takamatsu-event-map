import geolonia from '@geolonia/embed';

export const fitBoundsToUpperScreen = (bbx: any, map:geolonia.Map ) => {

  const app = document.getElementsByClassName('app')[0]
  const screenHeight = app.clientHeight;

  const listHeightRatio = 0.6;
  const listHeight = screenHeight * listHeightRatio;

  const headerHeight = 50;
  const padding = 50;

  // @ts-ignore
  map.fitBounds(bbx, {
    padding: {
      top: padding + headerHeight,
      bottom: listHeight + padding,
      left: padding,
      right: padding
    }
  });
}
