import * as aws4 from 'aws4';
import axios from 'axios';

var https = require('https');

function request(opts: any) {
  console.log({ opts });
  https
    .request(opts, function (res: any) {
      res.pipe(process.stdout);
    })
    .end(opts.body || '');
}

process.env.AWS_ACCESS_KEY_ID = 'ASIA2DP7X6SIPGAQG67W';
process.env.AWS_SECRET_ACCESS_KEY = '0tCSUHzg6e++sZlZyiZb6b+DlIjecLwwcjJkPLNI';
process.env.AWS_SESSION_TOKEN =
  'IQoJb3JpZ2luX2VjEN///////////wEaDmFwLXNvdXRoZWFzdC0xIkcwRQIhAIJXSJ7ohzq5dEbaGhQlqa6TupoxQWFZ+DYd+1KvpRIwAiB7GvU2nw6TXamkycyvMzS4032hwJpB4J46kMdUlogKjSrgAQh4EAAaDDY5NDcxMDQzMjkxMiIME0RUnhlNb+U/E3SwKr0Bayi4xPGZ4wtC5CPSO9ud7Gd1EGDY9uavbvwXvaLUrRfyprcCrhQI85qlytEtHEyYtf0ekYVMUiuEgkBFUNeLmXV2VrsVVVp7fpco57tcZ1OqesLHswcQiz8j3VVAqDTGODcirAU7zKTE+CX21CmBNMkXlntnSWOvi+G2H/g3TlAF1mEaL+i2M1Dw2tFhZwpLZ2Der5NQYbVWOggepWvVWpy5vQts9xOjpeOkgudBSGwg47PFj3KxWS08wvkNMKvxyP4FOuABEGxNNAnx80HVbY6WJcFwoxGTmmC1U4BRyOoEX569U7/muyHjpqNdxy4ahg9IDqSZb+HJ4YM2bla9pB1bTD3hTPJU8OuRwkvbMnuAlIU4KBBzFwyY35Z7WJDnY2A62iUT6ER0oPgoF7/jqyiU0mpgzC+TMJ7+XOpNs8CeLYH6iZVW8LIyFSGGFbx+sn2wV8WsIipdm3zwF6XMaTSm/+vCY8X6N05eGwyZZ+d8MbZQ5vO805ZHYDZscnJM9DFXt9vPqgt/fNyW8POJLVhB4S10UeX+i90fRgeFvyyxfcDyfts=';

const tryWithRequest = async () => {
  var opts = {
    host: '4rjawoou71.execute-api.ap-southeast-1.amazonaws.com',
    path: '/prod/internal/hello',
    service: 'execute-api',
    region: 'ap-southeast-1',
  };

  // aws4.sign() will sign and modify these options, ready to pass to http.request
  aws4.sign(opts, {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    sessionToken: process.env.AWS_SESSION_TOKEN,
  });

  // dns.lookup(host, console.log)
  try {
    request(opts);
    // console.log({ response });
  } catch (err) {
    // console.log({ err });
  }
};

tryWithRequest()
  .then(() => {
    console.log('done');
  })
  .catch((e) => console.error(e));

console.log('Hello World 4');
