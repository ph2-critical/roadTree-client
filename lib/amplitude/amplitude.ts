'use client';

import { init } from '@amplitude/analytics-browser';

const AMPLITUDE_DEV_API_KEY: string =
  process.env.NEXT_PUBLIC_AMPLITUDE_DEV_API_KEY ?? '';
const AMPLITUDE_PROD_API_KEY: string =
  process.env.NEXT_PUBLIC_AMPLITUDE_PROD_API_KEY ?? '';

const KEY: string =
  process.env.NODE_ENV === 'development'
    ? AMPLITUDE_DEV_API_KEY
    : AMPLITUDE_PROD_API_KEY;

const initAmplitude = (userId: string) => {
  if (userId === '' || !userId) init(KEY);
  else init(KEY, `roadtree-${userId}`);
};

export default initAmplitude;
