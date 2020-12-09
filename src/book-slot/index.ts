import request from 'request-promise-native';
import poll from 'promise-poller';

import puppeteer from 'puppeteer';

const config = {
  sitekey: '6LdycMkSAAAAAKBw6iwQRv-_oLvmUHw0tQJEENuw',
  apiKey: 'f0c2f90a45ee7a26b513d4eee6dd8119',
  apiSubmitUrl: 'http://2captcha.com/in.php',
  apiRetrieveUrl: 'http://2captcha.com/res.php',
};

const chromeOptions = {
  // executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: false,
  slowMo: 10,
  defaultViewport: null,
};

async function initiateCaptchaRequest(pageurl: string) {
  const formData = {
    method: 'userrecaptcha',
    googlekey: config.sitekey,
    key: config.apiKey,
    pageurl: pageurl,
    json: 1,
  };
  const response = await request.post(config.apiSubmitUrl, { form: formData });
  return JSON.parse(response).request;
}

async function pollForRequestResults(id: string, retries = 30, interval = 1500, delay = 15000) {
  await timeout(delay);
  return poll({
    taskFn: requestCaptchaResults(id),
    interval,
    retries,
  });
}

function requestCaptchaResults(requestId: string) {
  const url = `${config.apiRetrieveUrl}?key=${config.apiKey}&action=get&id=${requestId}&json=1`;
  return async function () {
    return new Promise(async function (resolve, reject) {
      const rawResponse = await request.get(url);
      const resp = JSON.parse(rawResponse);
      console.log(resp);
      if (resp.status === 0) return reject(resp.request);
      resolve(resp.request);
    });
  };
}

const timeout = (millis: number) => new Promise((resolve) => setTimeout(resolve, millis));

const bookSlot = async (bookingLink: string) => {
  const browser = await puppeteer.launch(chromeOptions);
  const page = await browser.newPage();
  await page.goto(bookingLink, { waitUntil: 'networkidle0' });

  await page.type('input[name=field4]', 'John Smith');

  await page.type('input[name=field5_original]', '8123 4567');

  await page.type('input[name=field6]', 'johnsmith21oct2020@gmail.com');

  const requestId = await initiateCaptchaRequest(bookingLink);

  let response;
  try {
    response = await pollForRequestResults(requestId);
    if (!response) {
      throw new Error('Captcha response is null');
    }
  } catch (err) {
    throw new Error('Could not get captcha response');
  }

  await page.evaluate(`document.getElementById("g-recaptcha-response").innerHTML="${response}"; captchaSuccess()`);

  browser.close();
};

export default bookSlot;
