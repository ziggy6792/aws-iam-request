/* Amplify Params - DO NOT EDIT
	API_COMPAPI_GRAPHQLAPIENDPOINTOUTPUT
	API_COMPAPI_GRAPHQLAPIIDOUTPUT
	API_COMPAPI_GRAPHQLAPIKEYOUTPUT
Amplify Params - DO NOT EDIT */

import gql from 'graphql-tag';
import buildApiClient from './build-client/buildApiClient';

import Connection from './build-client/Connection';

const partialConnection: Partial<Connection> = {};

// Ninja
partialConnection.URL = 'https://lxugqcwmhzcxxjguavtklkgbk4.appsync-api.ap-southeast-1.amazonaws.com/graphql';
partialConnection.REGION = 'ap-southeast-1';
// Connaction Auth
partialConnection.AWS_ACCESS_KEY_ID = 'ASIA2DP7X6SIOPQSNNM2';
partialConnection.AWS_SECRET_ACCESS_KEY = 'W0PvhiLLjIzm9JnkwfzhTMn+HWJHGM3gMkr12Y+T';
partialConnection.AWS_SESSION_TOKEN =
  // eslint-disable-next-line max-len
  'IQoJb3JpZ2luX2VjENj//////////wEaDmFwLXNvdXRoZWFzdC0xIkcwRQIhAJ0/5R3mOEBALIcC2QFiRB2dfKml2nL6TfYCwVBG/U5lAiB3wk/NJnunxXeIoS2VdW7/tPtj1lPRb0kfFUyDQBFKsCrRAQhxEAAaDDY5NDcxMDQzMjkxMiIMvKt2s5ABZiXavcy4Kq4BwsMcmRBWin09OMYbvVB+ypQcXvcdzNa9WNF0xnm5L49TmN/48wQhUx/Aos+XPDbqHJuwwhOOXI5hWNetlDL8uNhNLb5QifB7CW4MKsJNNS8cMcBvxmHlZe4idC6Nz//hCB5f3ignW8Pj8pAVNTDsAhb1/gETmbqsTvmmfypxX9OTsnIuMCS5UnPOGqH0wjnvC3cZunpapdmn8doO1w0yjuxmQ0NPNETq/nSvfiBqMNCrx/4FOuABGnJ+Vh8/XcT/KEYmuppZHS7iDbsSzonz2Hm1UuijLEFV9OMoUVhl+vyDAbnE+mK8z0aZJX+dDV/HSwwduGqvmtNxLVwvCy4BzTbna93F5X6hBA26nJvz0+TZmgbCrzx0Tt0AcQmlhqlK9dbVpbb08IaiTqrqkTlwOYiL3lfq4GeQx11nSPvZPrN5x0yN7LsmuCuU6tBoUDlWb3qkcpwupoKGwtzMJ8Jo27GMM1XojxxLvNiMgTvmDzMxnL2MXwuWZzzhrw3J4y8fOb0dO5YySkULn0AqR9USX4940+I7FeY=';

// Alpaca
partialConnection.URL = 'https://4rjawoou71.execute-api.ap-southeast-1.amazonaws.com/prod/internal/hello';
partialConnection.REGION = 'ap-southeast-1';
// Connaction Auth
partialConnection.AWS_ACCESS_KEY_ID = 'ASIA2DP7X6SIHUVNLDMT';
partialConnection.AWS_SECRET_ACCESS_KEY = 'gk0hXe7vhy79dkD7GZIX7wnatB0aX3GgjHaSEmS/';
partialConnection.AWS_SESSION_TOKEN =
  // eslint-disable-next-line max-len
  'IQoJb3JpZ2luX2VjENn//////////wEaDmFwLXNvdXRoZWFzdC0xIkcwRQIhALi8zv8lyqpiMP9wx6VvJloG1q482WshaGoQaIrWZXemAiBqQRzOzDLsBiaJgxjryq37YWds8g0lue+LkbB2ZO8CPSrgAQhyEAAaDDY5NDcxMDQzMjkxMiIMVdDb+yVYYfwBFV5fKr0Bc5fb4Hyxmk9TM7j5o2otpceNDU8ZlL1YaJ0qeTcW/oyHZ4b1D5LleHkbt9T9KMUoqklUZGPUHT9oM00KeWe2ziH5UyT0m+0UG0aqCIlRRRHdW0+eWnGz5wXLtr6SmJs0Xauy796mcBJeOVOq+UE/i0ymaCUl+HDMLN3QzdjHX6Zjo6c8OOilE1+4yGhi+rTHzYXlWP9qH9N2ZZUVwsg2DMHfyZdlSrppwhlfcnMsWyvPDzb3RPlwexBiZ2YkMITOx/4FOuABlsNUn2lIYYqjXLecZhv+m0C5IhCn5hiroPrEw+NjHbdA9A+weDfvUEpNRPTOAjLnNLe7q36zEhYX4WAoNjq/X4qOYBfQo9K4rj8SFXuAAzHahCrLzu6wDSUFGai/Vbfwz0cnA9TeYvaTK3mgrgKomExEkTV6m4kMVKxklJsgpM45KiY0gHy0tan6BrNHlQc1Y2kKkvChObnIMOcilE60JdRgbQmaMNooty1tCbej02pZfAGPzkJR3guJ066hCbmSi7fYVkxRyDM/KMGsfNMl99Dn3QDsHKxLoEgAhMAjRKc=';

const connection: Connection = partialConnection as Connection;

export const handler = async (): Promise<object> => {
  const client = buildApiClient(connection, {});

  const HELLO = gql`
    {
      getCompetition(id: "mensAdvanced") {
        id
      }
    }
  `;

  try {
    const response = await client.query({ query: HELLO });

    console.log(response, JSON.stringify(response));
  } catch (err) {
    console.log({ err });
  }

  return {};
};
