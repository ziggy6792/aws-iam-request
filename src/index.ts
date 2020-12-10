import Axios from 'axios';
import * as aws4 from 'aws4';
const request = require('request');
var agw4 = require('apigateway4');

process.env.AWS_ACCESS_KEY_ID = 'ASIA2DP7X6SIJH63BL6Z';
process.env.AWS_SECRET_ACCESS_KEY = 'Y4ShWPNI5qsG84JQT+PV95842yQW80VhU+MVBG6u';
process.env.AWS_SESSION_TOKEN =
  'IQoJb3JpZ2luX2VjENP//////////wEaDmFwLXNvdXRoZWFzdC0xIkcwRQIhAOcxTObfKa0fYbbFCjPE6WduOcfC4p4g6NLpij2s24KpAiBQSA7/lYI45UA5GHwqFVKOg1jrDWIEbzPIFyDj7K188yrgAQhsEAAaDDY5NDcxMDQzMjkxMiIMMmtpLqgYSYJUasA4Kr0BA5I5qe9+vbvTEHAWDmEJThBgGuoFi/8/VChP/QHJzx7z7uVw3L7pLc/4tlO6X6ywwMIOfKyUJVAZpaxvG9E1jaPmRoAiISVoFgLS4QAS5lFsjopMNvqI6J0hYc2rvPQRgB+2e29PbJ3YKG1qckkCYBuNF1LqSfwWG0bLw2sixDM9UGixTk4smszmE8k7icvYwfK0hhHFE4YE5Ih67bMgHoQYEMIWgj1K4i+zcNgRqbq4J9R2o6t85WJPkSvHMMuPxv4FOuABbNBErt2haCE04kmSG88AKCFbUbtVHel//6EKCPLgcO/jJzx/yZpaJNsBQ2Fo3zSUOxkSxyRdsd63/qiq2VPQeOKsJFo0I3JgbllTt23N6Wqw+rhPp3kWcEgLe8IDjrRg2U/cp1dezEwGS8NgQAyhdwaSqiZ4my1z49Ns5f3xRJSiJyKtj/MCaLL0AaHhZMMuoySi+CrdkjJDsE3S3VkIsyLAE0LEbqEomSGkBjfB9GxztM5oxz34sVFRJWohliK67sheF3alEGSHP46caRa4EBa2wUYQONvrzHPHF9/OCvA=';
const main = async () => {
  console.log('AWS_SECRET_ACCESS_KEY', process.env.AWS_SECRET_ACCESS_KEY);

  const signedRequest = aws4.sign(
    {
      host: `https://4rjawoou71.execute-api.ap-southeast-1.amazonaws.com/`,
    },
    {
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      sessionToken: process.env.AWS_SESSION_TOKEN,
      region: 'ap-southeast-1',
    }
  );
  console.log('signedRequest', signedRequest);

  const response = await request(signedRequest);

  const unprotectedInstance = Axios.create({
    baseURL: `https://4rjawoou71.execute-api.ap-southeast-1.amazonaws.com/prod/unprotected/hello`,
    timeout: 30000,
    // headers: signedRequest.headers,
  });

  const internalInstance = Axios.create({
    baseURL: `https://4rjawoou71.execute-api.ap-southeast-1.amazonaws.com/prod/internal/hello`,
    timeout: 30000,
    headers: signedRequest.headers,
  });

  try {
    // response = await client.query({ query: HELLO });
    // const response = await request(signedRequest);
    const response = await internalInstance.get('/');
    console.log({ response });
    console.log({ data: response.data });
  } catch (err) {
    console.log({ err });
  }
};

const postManAxious = async () => {
  var data = JSON.stringify({
    query: '{\n  hello\n}',
    variables: {},
  });

  const signedRequest = aws4.sign(
    {
      host: `https://4rjawoou71.execute-api.ap-southeast-1.amazonaws.com/`,
    },
    {
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      sessionToken: process.env.AWS_SESSION_TOKEN,
      region: 'ap-southeast-1',
      service: 'execute-api',
    }
  );

  console.log('signedRequest hi', signedRequest.headers);

  var config = {
    method: 'post' as 'post',
    url: 'https://4rjawoou71.execute-api.ap-southeast-1.amazonaws.com/prod/internal/hello',
    headers: {
      'X-Amz-Content-Sha256': '25bc53f2082ffc6190d025fa174f1419174a3568c830d325110bd46fcb3c4029',
      'X-Amz-Security-Token':
        'IQoJb3JpZ2luX2VjENP//////////wEaDmFwLXNvdXRoZWFzdC0xIkcwRQIhAOcxTObfKa0fYbbFCjPE6WduOcfC4p4g6NLpij2s24KpAiBQSA7/lYI45UA5GHwqFVKOg1jrDWIEbzPIFyDj7K188yrgAQhsEAAaDDY5NDcxMDQzMjkxMiIMMmtpLqgYSYJUasA4Kr0BA5I5qe9+vbvTEHAWDmEJThBgGuoFi/8/VChP/QHJzx7z7uVw3L7pLc/4tlO6X6ywwMIOfKyUJVAZpaxvG9E1jaPmRoAiISVoFgLS4QAS5lFsjopMNvqI6J0hYc2rvPQRgB+2e29PbJ3YKG1qckkCYBuNF1LqSfwWG0bLw2sixDM9UGixTk4smszmE8k7icvYwfK0hhHFE4YE5Ih67bMgHoQYEMIWgj1K4i+zcNgRqbq4J9R2o6t85WJPkSvHMMuPxv4FOuABbNBErt2haCE04kmSG88AKCFbUbtVHel//6EKCPLgcO/jJzx/yZpaJNsBQ2Fo3zSUOxkSxyRdsd63/qiq2VPQeOKsJFo0I3JgbllTt23N6Wqw+rhPp3kWcEgLe8IDjrRg2U/cp1dezEwGS8NgQAyhdwaSqiZ4my1z49Ns5f3xRJSiJyKtj/MCaLL0AaHhZMMuoySi+CrdkjJDsE3S3VkIsyLAE0LEbqEomSGkBjfB9GxztM5oxz34sVFRJWohliK67sheF3alEGSHP46caRa4EBa2wUYQONvrzHPHF9/OCvA=',
      'X-Amz-Date': '20201210T023804Z',
      Authorization:
        'AWS4-HMAC-SHA256 Credential=ASIA2DP7X6SIJH63BL6Z/20201210/ap-southeast-1/execute-api/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date;x-amz-security-token, Signature=72d9f574d80213c51b7839d0d9795bc76e60103ad4a6c2fbab6bdb12970bbd95',
      'Content-Type': 'application/json',
    },
    data: data,
  };

  config.headers = { ...config.headers, ...signedRequest.headers };

  const axios = Axios.create();

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

// const apigateway4Attempt = () => {
//   var requestOpts = {
//     uri: 'https://4rjawoou71.execute-api.ap-southeast-1.amazonaws.com/prod/internal/hello'
//   }

//   var signer = new agw4.BuildRequestSigner(requestOpts,credentials)

//   signer.sign()
// };

postManAxious()
  .then(() => {
    console.log('done');
  })
  .catch((e) => console.error(e));

console.log('Hello World 4');
