import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to open-ai!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
      <footer>
        Hallo Dodi!
      </footer>
    </>
  );
}

export default CustomApp;
