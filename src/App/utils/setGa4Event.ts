export const setGa4Event = (category: string, eventName: string) => {

  console.log("setGa4Event", category, eventName);

  // @ts-ignore
  window.dataLayer.push({
    'select_takamatsu_event': category,
  });
};
