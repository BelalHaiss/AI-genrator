import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Box, ChakraProvider, Flex } from '@chakra-ui/react';
import { theme } from '@/utils/theme';
import SideNav from '@/components/layout/sideNav/SideNav';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtl from 'stylis-plugin-rtl';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useDimension } from '@/hooks/useDimension';
import { SIDE_NAV_IS_OPEN_ON, SIDE_NAV_WIDTH } from '@/utils/statics';

export default function App({ Component, pageProps }: AppProps) {
  const { width } = useDimension();
  const [isOpen, setIsOpen] = useState(true);
  const [isManualOpen, setIsOpenManual] = useState(false);
  const leftBody = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (width >= SIDE_NAV_IS_OPEN_ON && !isOpen) setIsOpen(true);
    if (width < SIDE_NAV_IS_OPEN_ON && isOpen && !isManualOpen)
      setIsOpen(false);
  }, [width]);
  useEffect(() => {
    if (isOpen || isManualOpen) {
      leftBody.current?.style.setProperty(
        'max-width',
        `calc(100% - ${SIDE_NAV_WIDTH}px)`
      );
    } else {
      leftBody.current?.style.setProperty('max-width', '100%');
    }
  }, [isOpen, isManualOpen]);
  return (
    <ChakraProvider theme={theme}>
      <RtlProvider>
        <Box w='100' position='relative' gap='1' h='100vh'>
          <SideNav isOpen={isOpen || isManualOpen} />

          <Box
            h='100%'
            maxH='100%'
            overflow={'auto'}
            float={'right'}
            ref={leftBody}
            flexDir={'column'}
            w={'full'}
            className='nav-opened'
          >
            <Flex bg='gray.800' p='2'></Flex>
            <main style={{ position: 'relative' }}>
              <Component {...pageProps} />
            </main>
          </Box>
        </Box>
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
