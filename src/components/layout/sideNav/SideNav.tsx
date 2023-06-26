import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Avatar,
  Text,
  Flex,
  Button,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/react';
import { useState, ReactNode, useEffect } from 'react';
import { RiMenuUnfoldLine } from 'react-icons/ri';
import { IoLogOut } from 'react-icons/io5';
import { useRouter } from 'next/router';
import { useStore } from '@/utils/store';
import Image from 'next/image';
import { useDimension } from '@/hooks/useDimension';
import { NavLinks } from './NavLinks';
import { SIDE_NAV_WIDTH } from '@/utils/statics';
type Props = {
  isOpen: boolean;
};
export default function SideNav({ isOpen }: Props) {
  const router = useRouter();
  const user = useStore((state) => state.user);

  return (
    <Flex
      id='side-nav'
      position='absolute'
      bg='gray.800'
      py='1'
      minH='100%'
      opacity={isOpen ? 1 : 0}
      w={isOpen ? `${SIDE_NAV_WIDTH}px` : 0}
      px='2'
      gap='1'
      display={'flex'}
      flexDir='column'
    >
      {/* header */}{' '}
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
      <Flex flex='0'>
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
  );
}
