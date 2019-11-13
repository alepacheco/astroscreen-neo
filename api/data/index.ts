import { NowRequest, NowResponse } from '@now/node';

export const data = [
  {
    socialNetwork: 'Google',
    eventName: 'SEO Attack',
    level: 0,
  },
  {
    socialNetwork: 'Twitter',
    eventName: 'Fake reviews',
    level: 1,
  },
  {
    socialNetwork: 'Instagram',
    eventName: 'SEO Attack',
    level: 1,
  },
  {
    socialNetwork: 'Facebook',
    eventName: 'Fake reviews',
    level: 0,
  },
  {
    socialNetwork: 'Snapchat',
    eventName: 'SEO Attack',
    level: 2,
  },
  {
    socialNetwork: 'Reddit',
    eventName: 'Fake reviews',
    level: 0,
  },
  {
    socialNetwork: 'Wikipedia',
    eventName: 'SEO Attack',
    level: 1,
  },
  {
    socialNetwork: 'Someother',
    eventName: 'SEO Attack',
    level: 0,
  },
  {
    socialNetwork: 'Else',
    eventName: 'SEO Attack',
    level: 2,
  },
];

const handler = (_: NowRequest, res: NowResponse) => {
  res.json(data);
};

export default handler;
