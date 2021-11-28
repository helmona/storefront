import '../assets/main.css'
/* import '@assets/chrome-bug.css'
import 'keen-slider/keen-slider.min.css' */

import { useEffect } from 'react';

import Head from '@components/Head';
import Layout from '@components/HellLayout';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      <Head />
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
