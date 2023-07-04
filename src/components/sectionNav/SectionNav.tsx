import { NavCategories } from '@/types/section-nav';
import { Button, Flex } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

type Props = {
  categories: NavCategories[];
};

export function SectionNav({ categories }: Props) {
  const { t } = useTranslation('common');

  const { query, replace } = useRouter();
  return (
    <Flex gap='1' w='100%' boxShadow={'lg'} borderTopRadius={'lg'}>
      {categories.map((section) => (
        <Button
          onClick={() => replace(section.link)}
          isActive={query.type === section.label}
          colorScheme={query.type === section.label ? 'blackAlpha' : 'gray'}
          variant={query.type === section.label ? 'solid' : 'ghost'}
          key={section.link}
        >
          {t(section.label)}
        </Button>
      ))}
    </Flex>
  );
}
