import { Context, APIGatewayProxyResult, Callback } from 'aws-lambda';

export type AppsyncHandler = (event: AppSyncEvent, context: Context, callback: Callback<object | string>) => void | Promise<object | string>;

export interface AppSyncEvent {
  typeName: string;
  fieldName: string;
  arguments: any;
  identity: Identity;
  source?: any;
  request: Request;
  prev: Prev;
}

export interface Input {
  id: string;
  name: string;
  when: string;
}
export interface Identity {
  claims: Claims;
  defaultAuthStrategy: string;
  groups?: string[] | null;
  issuer: string;
  sourceIp?: string[] | null;
  sub: string;
  username: string;
}
export interface Claims {
  sub: string;
  'cognito-groups'?: string[] | null;
  event_id: string;
  token_use: string;
  scope: string;
  auth_time: number;
  iss: string;
  exp: number;
  iat: number;
  jti: string;
  client_id: string;
  username: string;
}
export interface Request {
  headers: Headers;
}
export interface Headers {
  'x-forwarded-for': string;
  'accept-encoding': string;
  'cloudfront-viewer-country': string;
  'cloudfront-is-tablet-viewer': string;
  via: string;
  'cloudfront-forwarded-proto': string;
  'content-type': string;
  origin: string;
  'x-amzn-trace-id': string;
  'x-amz-cf-id': string;
  authorization: string;
  'content-length': string;
  'x-forwarded-proto': string;
  host: string;
  'accept-language': string;
  'user-agent': string;
  'cloudfront-is-desktop-viewer': string;
  'cloudfront-is-mobile-viewer': string;
  accept: string;
  'x-forwarded-port': string;
  'cloudfront-is-smarttv-viewer': string;
}
export interface Prev {
  result: Result;
}
export interface Result {}
