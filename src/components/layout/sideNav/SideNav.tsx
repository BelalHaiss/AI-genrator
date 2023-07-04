import { Avatar, Text, Flex, Button, Slide } from '@chakra-ui/react';
import { useState, ReactNode, useEffect, memo } from 'react';
import { IoLogOut } from 'react-icons/io5';
import { useRouter } from 'next/router';
import { useStore } from '@/utils/store';
import Image from 'next/image';
import { useDimension } from '@/hooks/useDimension';
import { NavLinks } from './NavLinks';
import { SIDE_NAV_IS_OPEN_ON, SIDE_NAV_WIDTH } from '@/utils/statics';
import useTranslation from 'next-translate/useTranslation';
import { useAnimation } from 'framer-motion';
type Props = {
  isOpen: boolean;
};
export default function SideNav({ isOpen }: Props) {
  const router = useRouter();
  const user = useStore((state) => state.user);
  const { t, lang } = useTranslation('common');

  return (
    <Slide
      direction={lang === 'en' ? 'left' : 'right'}
      in={isOpen}
      initial={false}
    >
      <Flex
        position='absolute'
        bg='gray.800'
        py='1'
        minH='100%'
        w={`${SIDE_NAV_WIDTH}px`}
        className={isOpen ? 'open-nav' : 'close-nav'}
        px='2'
        gap='1'
        display={'flex'}
        flexDir='column'
      >
        {/* header */}
        <Flex align={'center'} flexDir='column' flex='0' justify='center'>
          <Image
            style={{ borderRadius: '50px' }}
            width={50}
            height={50}
            src='https://marketplace.canva.com/EAFMYuBCS60/1/0/1600w/canva-blue-minimalist-artificial-intelligence-technology-logo-8vBJkwJROWw.jpg'
            alt='ai logo'
          />
        </Flex>
        {/* body */}
        <Flex my='2' flex='1'>
          <NavLinks active={router?.pathname} />
        </Flex>
        {/* footers */}
        <Flex flex='0' mx='1'>
          <Avatar
            name={user?.name}
            cursor='pointer'
            size={'sm'}
            onClick={() => router.replace('/profile')}
            src='https://thispersondoesnotexist.com/'
          />
          <Text fontWeight={'bold'} fontSize='sm'>
            {user?.name}
          </Text>
          <Button
            mr='auto'
            size='sm'
            colorScheme='red'
            leftIcon={<IoLogOut fontSize='18px' />}
          >
            خروج
          </Button>
        </Flex>
      </Flex>
    </Slide>
  );
}
