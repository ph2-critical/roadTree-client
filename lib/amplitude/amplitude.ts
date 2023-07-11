'use client';

import { init } from '@amplitude/analytics-browser';

const userId = 1234;
const AMPLITUDE_DEV_API_KEY: string =
  process.env.NEXT_PUBLIC_AMPLITUDE_DEV_API_KEY ?? '';
const AMPLITUDE_PROD_API_KEY: string =
  process.env.NEXT_PUBLIC_AMPLITUDE_PROD_API_KEY ?? '';

const KEY: string =
  process.env.NODE_ENV === 'development'
    ? AMPLITUDE_DEV_API_KEY
    : AMPLITUDE_PROD_API_KEY;

const initAmplitude = () => {
  console.log('init amplitude with 개발환경: ', process.env.NODE_ENV);
  init(KEY, `roadtree-${userId}`),
    {
      defaultTrackig: {
        pageViews: false,
      },
    };
};

export default initAmplitude;
