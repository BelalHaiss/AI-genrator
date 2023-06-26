import useTranslation from 'next-translate/useTranslation';
import { Button, Flex, Icon } from '@chakra-ui/react';
import { navLinks } from './util/sideNav.util';
import { useMemo } from 'react';
import { useRouter } from 'next/router';

export function NavLinks({ active }: { active: string }) {
  const { t } = useTranslation('common');

  const links = useMemo(() => navLinks, []);
  const router = useRouter();
  return (
    <Flex flexDir='column' alignItems='center' gap='2'>
      {links.map((link) => (
        <Flex
          position='relative'
          onClick={() => router.replace(link.path)}
          key={link.path}
        >
          <Button
            color={'gray.200'}
            w='200px'
            isActive={link.path === active}
            colorScheme={link.path === active ? 'blackAlpha' : 'gray'}
            variant={link.path === active ? 'solid' : 'ghost'}
          >
            {t(link.label)}
          </Button>
          <Icon
            w='5'
            h='5'
            color={link.path === active ? 'gray.100' : 'gray.600'}
            as={link.icon}
            position='absolute'
            top='20%'
            right='13'
          />
        </Flex>
      ))}
    </Flex>
  );
}
