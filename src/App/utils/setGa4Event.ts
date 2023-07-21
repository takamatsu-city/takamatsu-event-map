export const setGa4Event = (category: string, eventName: string) => {

  // @ts-ignore
  window.dataLayer.push({
    'event': 'takamatsu_event_event',
    'takamatsu_event_category': category,
    'takamatsu_event_name': eventName,
  });
};
