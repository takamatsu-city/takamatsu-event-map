// 現在の日時を "2023-06-07T00:00:00.000Z" の形式で取得
const today = new Date()
today.setHours(0, 0, 0, 0)
// today.toISOString()

const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

const thisSaturday = new Date(today);
thisSaturday.setDate(thisSaturday.getDate() + (6 - thisSaturday.getDay()));

const nextSaturday = new Date(thisSaturday);
nextSaturday.setDate(nextSaturday.getDate() + 7);


console.log({today});
console.log({tomorrow});
console.log({thisSaturday});
console.log({nextSaturday});

// const todayEvent = {
//   properties : {
//     start_date : today,
//     end_date : today
//   }
// }

// const tommorowEvent = {
//   properties : {
//     start_date : today.setDate(today.getDate() + 1),
//     end_date : today.setDate(today.getDate() + 1)
//   }
// }



