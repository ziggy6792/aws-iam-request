import bookSlot from './book-slot';
// import bookSlot from './book-slot-fetch';
import getAvailableSlots, { ISlotResponse } from './get-available-slots';
import redditExample from './reddit-example';

const main = async () => {
  // let availableSlots = getAvailableSlots();
  console.log('fetch slots');
  await bookSlot(
    'https://swpsystemc.youcanbook.me/service/jsps/book.jsp?cal=693eae8c-0144-407d-92f2-725867e5be04&ini=1603867695229&service=jsid8744009&slot=1604296800000'
  );
  // await redditExample();
  // await bookSlot();
};

main()
  .then(() => {
    console.log('done');
  })
  .catch((e) => console.error(e));

console.log('Hello World 4');
