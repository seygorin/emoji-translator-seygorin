// eslint-disable-next-line
import { AppProps } from 'next/app';
import { Layout } from '../app/layout';

import '../app/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;