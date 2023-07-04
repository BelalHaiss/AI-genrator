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
import SideNav from '@/components/layout/sideNav/SideNav';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtl from 'stylis-plugin-rtl';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useDimension } from '@/hooks/useDimension';
import { SIDE_NAV_IS_OPEN_ON, SIDE_NAV_WIDTH } from '@/utils/statics';
import useTranslation from 'next-translate/useTranslation';
import { RxHamburgerMenu } from 'react-icons/rx';

export default function App({ Component, pageProps }: AppProps) {
  const { width } = useDimension();
  const [isOpen, setIsOpen] = useState(true);
  const leftBody = useRef<HTMLDivElement>(null);
  const { t, lang } = useTranslation('common');
  useEffect(() => {
    if (width >= SIDE_NAV_IS_OPEN_ON) {
      setIsOpen(true);
    }
    if (width < SIDE_NAV_IS_OPEN_ON) setIsOpen(false);
  }, [width]);
  useEffect(() => {
    const { className } = leftBody.current!;
    if (isOpen && !className) leftBody.current!.className = 'main-app-maxW';
    if (!isOpen) leftBody.current!.className = '';
  }, [isOpen]);
  return (
    <ChakraProvider theme={theme}>
      <RtlProvider>
        <Box w='100' position='relative' gap='1' maxH='100%' h='100vh'>
          <SideNav isOpen={isOpen} />
          <Box
            h='100%'
            bg='gray.800'
            maxH='100%'
            style={{
              float: !isOpen ? 'none' : lang === 'ar' ? 'left' : 'right'
            }}
            ref={leftBody}
            w='full'
            minW={!isOpen ? '100%' : 'auto'}
            className='main-app-maxW'
          >
            <Flex
              align={'center'}
              bg='gray.800'
              zIndex={100}
              h={'125px'}
              w='100%'
              p='2'
            >
              <IconButton
                aria-label='menu'
                onClick={() => setIsOpen(!isOpen)}
                icon={<RxHamburgerMenu />}
                colorScheme='whiteAlpha'
              />
            </Flex>

            <main
              className='main'
              style={{
                position: 'relative',
                overflow: 'auto'
              }}
            >
              <Flex bg='gray.200'>
                <Component {...pageProps} />
              </Flex>
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
