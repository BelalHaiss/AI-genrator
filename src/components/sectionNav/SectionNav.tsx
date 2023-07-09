import { NavCategories } from '@/types/section-nav';
import { Button, Flex } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

type Props = {
  categories: NavCategories[];
};

export function SectionNav({ categories }: Props) {
  const { t } = useTranslation('write');

  const { push, asPath } = useRouter();
  const isActivePath = (currentPath: string) => {
    const mainPath = '/write';
    if (currentPath === mainPath && asPath !== currentPath) return false;
    return asPath.includes(currentPath);
  };

  return (
    <Flex bg='gray.800'>
      <Flex
        gap='2'
        w='full'
        p='3'
        className='radius-border'
        overflow={'auto'}
        boxShadow={'lg'}
      >
        {categories.map((section) => (
          <Button
            minW='200px'
            onClick={() => push(section.link)}
            isActive={isActivePath(section.link)}
            colorScheme={isActivePath(section.link) ? 'blackAlpha' : 'gray'}
            variant={isActivePath(section.link) ? 'solid' : 'ghost'}
            key={section.link}
          >
            {t(section.label)}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
}
