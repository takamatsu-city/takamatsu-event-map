const queryEventByDate = () => {

  // events.filter((event) => {

  //   if (queryDate.length === 0) {
  //     return false
  //   }

  //   const today = new Date();
  //   today.setHours(0, 0, 0, 0);
  //   const tomorrow = new Date();
  //   tomorrow.setDate(today.getDate() + 1);

  //   const thisSaturday = new Date();
  //   thisSaturday.setDate(today.getDate() + (6 - today.getDay()));
  //   const thisSunday = new Date();
  //   thisSunday.setDate(today.getDate() + (7 - today.getDay()));

  //   const startDate = new Date(event.properties?.start_date as string);
  //   const endDate = new Date(event.properties?.end_date as string);

  //   // チェックされた日にちが、イベントデータの「開始日」と「終了日」の間に含まれるデータを抽出
  //   if (queryDate.includes('today')) {
  //     if (startDate <= today && today <= endDate) {
  //       return true;
  //     }
  //   }

  //   if (queryDate.includes('tomorrow')) {
  //     if (startDate <= tomorrow && tomorrow <= endDate) {
  //       return true;
  //     }
  //   }

  //   if (queryDate.includes('weekend')) {
  //     if (startDate <= thisSaturday && thisSaturday <= endDate) {
  //       return true;
  //     }
  //     if (startDate <= thisSunday && thisSunday <= endDate) {
  //       return true;
  //     }
  //   }

  //   return false;

  // })


}

