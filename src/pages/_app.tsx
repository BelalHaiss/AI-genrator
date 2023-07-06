import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  IconButton
} from '@chakra-ui/react';
import { theme } from '@/utils/theme';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { createStandaloneToast } from '@chakra-ui/react';
import rtl from 'stylis-plugin-rtl';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import { Layout } from '@/components/layout/AppLayout';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  const { ToastContainer } = createStandaloneToast(theme);

  return (
    <ChakraProvider theme={theme}>
      <RtlProvider>
        <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
        <ToastContainer />
      </RtlProvider>
    </ChakraProvider>
  );
}

// NB: A unique `key` is important for it to work!
const options = {
  rtl: { key: 'css-ar', stylisPlugins: [rtl] },
  ltr: { key: 'css-en' }
};

export function RtlProvider({ children }: { children: React.ReactNode }) {
  const { locale } = useRouter();
  const dir = locale == 'ar' ? 'rtl' : 'ltr';
  const cache = createCache(options[dir]);
  return <CacheProvider value={cache} children={children} />;
}
