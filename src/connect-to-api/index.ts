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
partialConnection.AWS_ACCESS_KEY_ID = 'ASIA2DP7X6SIPGAQG67W';
partialConnection.AWS_SECRET_ACCESS_KEY = '0tCSUHzg6e++sZlZyiZb6b+DlIjecLwwcjJkPLNI/';
partialConnection.AWS_SESSION_TOKEN =
  // eslint-disable-next-line max-len
  'IQoJb3JpZ2luX2VjEN///////////wEaDmFwLXNvdXRoZWFzdC0xIkcwRQIhAIJXSJ7ohzq5dEbaGhQlqa6TupoxQWFZ+DYd+1KvpRIwAiB7GvU2nw6TXamkycyvMzS4032hwJpB4J46kMdUlogKjSrgAQh4EAAaDDY5NDcxMDQzMjkxMiIME0RUnhlNb+U/E3SwKr0Bayi4xPGZ4wtC5CPSO9ud7Gd1EGDY9uavbvwXvaLUrRfyprcCrhQI85qlytEtHEyYtf0ekYVMUiuEgkBFUNeLmXV2VrsVVVp7fpco57tcZ1OqesLHswcQiz8j3VVAqDTGODcirAU7zKTE+CX21CmBNMkXlntnSWOvi+G2H/g3TlAF1mEaL+i2M1Dw2tFhZwpLZ2Der5NQYbVWOggepWvVWpy5vQts9xOjpeOkgudBSGwg47PFj3KxWS08wvkNMKvxyP4FOuABEGxNNAnx80HVbY6WJcFwoxGTmmC1U4BRyOoEX569U7/muyHjpqNdxy4ahg9IDqSZb+HJ4YM2bla9pB1bTD3hTPJU8OuRwkvbMnuAlIU4KBBzFwyY35Z7WJDnY2A62iUT6ER0oPgoF7/jqyiU0mpgzC+TMJ7+XOpNs8CeLYH6iZVW8LIyFSGGFbx+sn2wV8WsIipdm3zwF6XMaTSm/+vCY8X6N05eGwyZZ+d8MbZQ5vO805ZHYDZscnJM9DFXt9vPqgt/fNyW8POJLVhB4S10UeX+i90fRgeFvyyxfcDyfts=';

const connection: Connection = partialConnection as Connection;

export const handler = async (): Promise<object> => {
  const client = buildApiClient(connection);

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
