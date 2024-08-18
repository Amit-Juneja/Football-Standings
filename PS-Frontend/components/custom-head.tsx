import { CustomHeadProps } from '@/utils/types';
import Head from 'next/head';
import { ReactElement } from 'react';

const CustomHead = ({ description, title, pageDescription = '', keywords = '' }: CustomHeadProps): ReactElement => (
  <Head>
    <link rel="shortcut icon" type="image/x-icon" />
    <title>{title || 'Football Standings'}</title>
    <meta name="description" content={description || 'Football Standings'} />
    <meta name="pageDescription" content={pageDescription || ''} />
    <meta name="keywords" content={keywords || ''} />

    {/* Add the viewport meta tag to prevent zooming */}
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=1" />
  </Head>
);

export default CustomHead;
