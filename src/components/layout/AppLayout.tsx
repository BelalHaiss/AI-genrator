import { ReactNode } from 'react';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import SideNav from '@/components/layout/sideNav/SideNav';
import { useEffect, useRef, useState } from 'react';
import { useDimension } from '@/hooks/useDimension';
import { SIDE_NAV_IS_OPEN_ON } from '@/utils/statics';
import useTranslation from 'next-translate/useTranslation';
import { RxHamburgerMenu } from 'react-icons/rx';

export function Layout({ children }: { children: ReactNode }) {
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
          id='top-nav'
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
            overflow: 'auto',
            background: '#EDF2F7'
          }}
          id='app-main'
        >
          {children}
        </main>
      </Box>
    </Box>
  );
}
