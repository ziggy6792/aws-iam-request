import { handler } from './connect-to-api';

const appsyncAttempt = async () => {
  await handler();
};

appsyncAttempt()
  .then(() => {
    console.log('done');
  })
  .catch((e) => console.error(e));

console.log('Hello World 4');
