import { ApolloLink } from 'apollo-link';
import { createSubscriptionHandshakeLink } from 'aws-appsync-subscription-link';
import { createAuthLink } from 'aws-appsync-auth-link';
import ApolloClient from 'apollo-client';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';

import Auth from '@aws-amplify/auth';
import fetch from 'node-fetch';
interface Connection {
  URL: string;
  REGION: string;
  AWS_ACCESS_KEY_ID: string;
  AWS_SECRET_ACCESS_KEY: string;
  AWS_SESSION_TOKEN: string;
}

const buildApiClient = (connection: Connection) => {
  // AWS.config.update({
  //   region: connection.REGION,
  //   credentials: new AWS.Credentials(connection.AWS_ACCESS_KEY_ID, connection.AWS_SECRET_ACCESS_KEY, connection.AWS_SESSION_TOKEN),
  // });
  // const { credentials } = AWS.config;

  // const AppSyncConfig = {
  //   url: connection.URL,
  //   region: connection.REGION,
  //   auth: {
  //     type: 'AWS_IAM',
  //     credentials,
  //   },
  //   disableOffline: true,
  // } as AWSAppSyncClientOptions;

  // const awsLink = createAppSyncLink({
  //   ...AppSyncConfig,
  //   complexObjectsCredentials: () => Auth.currentCredentials(),
  //   resultsFetcherLink: ApolloLink.from([
  //     setContext((request, previousContext) => {
  //       const headers = {
  //         ...previousContext.headers,
  //         ...customHeaders,
  //       };
  //       console.log('headers', headers);

  //       return {
  //         headers,
  //       };
  //     }),
  //     createHttpLink({
  //       uri: AppSyncConfig.url,
  //     }),
  //   ]),
  // });

  // const appsyncClient: AWSAppSyncClient<NormalizedCacheObject> = new AWSAppSyncClient(AppSyncConfig, {
  //   defaultOptions: {
  //     query: {
  //       fetchPolicy: 'network-only',
  //       errorPolicy: 'all',
  //     },
  //   },
  //   link: awsLink,
  // });

  // const awsGraphqlFetch = (uri: string, options: any) => {
  //   // Do Custom stuff here, feels better breaking stuff
  //   options.headers['gym'] = 'stress';
  //   return fetch(uri, options) as any;
  // };
  // const appsyncClient = new ApolloClient({
  //   link: new HttpLink({
  //     uri: 'http://4rjawoou71.execute-api.ap-southeast-1.amazonaws.com/prod/unprotected/hello',
  //     fetch: awsGraphqlFetch,
  //   }),
  //   cache: new InMemoryCache(),
  // });

  // const httpLink = createHttpLink({
  //   uri: 'https://4rjawoou71.execute-api.ap-southeast-1.amazonaws.com/prod/unprotected/hello',
  // });

  // // const client = new ApolloClient({
  // //   cache: new InMemoryCache(),
  // //   link: httpLink,
  // // });

  // const client = new ApolloClient({
  //   cache:  new InMemoryCache(),
  //   uri: "http://localhost:4000/graphql"
  // });

  const awsGraphqlFetch = (uri: string, options: any) => {
    // Do Custom stuff here, feels better breaking stuff
    options.headers['gym'] = 'stress';
    return fetch(uri, options) as any;
  };

  const httpLink = createHttpLink({
    uri: 'https://4rjawoou71.execute-api.ap-southeast-1.amazonaws.com/prod/unprotected/hello',
    fetch: awsGraphqlFetch,
  });

  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

  return client;
};

export default buildApiClient;
