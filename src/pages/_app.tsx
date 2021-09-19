import GlobalStyle from '../styles/globals';
import type { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Isaac Vianna - Dev </title>
      </Head>

      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}
export default MyApp;
