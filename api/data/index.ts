import { NowRequest, NowResponse } from '@now/node';

export const data = [
  {
    socialNetwork: 'Google',
    eventName: 'SEO Attack',
  },
  {
    socialNetwork: 'Twitter',
    eventName: 'Fake reviews',
  },
  {
    socialNetwork: 'Instagram',
    eventName: 'SEO Attack',
  },
  {
    socialNetwork: 'Facebook',
    eventName: 'Fake reviews',
  },
  {
    socialNetwork: 'Snapchat',
    eventName: 'SEO Attack',
  },
  {
    socialNetwork: 'Reddit',
    eventName: 'Fake reviews',
  },
  {
    socialNetwork: 'Wikipedia',
    eventName: 'SEO Attack',
  },
  {
    socialNetwork: 'Someother',
    eventName: 'SEO Attack',
  },
  {
    socialNetwork: 'Else',
    eventName: 'SEO Attack',
  },
];

const handler = (_: NowRequest, res: NowResponse) => {
  res.json(data);
};

export default handler;
