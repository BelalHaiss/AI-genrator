import { ReactElement, useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import { SectionNav } from '@/components/sectionNav/SectionNav';
import { CardsWrapper } from '@/components/cards/CardsWrapper';
import {
  textCards,
  textCategories
} from '@/components/cards/util/text.card.util';

function Page() {
  return <CardsWrapper cards={textCards} />;
}

Page.getLayout = writeLayout;

export default Page;
export function writeLayout(page: ReactElement) {
  useEffect(() => {
    return () => {
      console.log('unmou t');
    };
  }, []);
  return (
    <Flex flexDir={'column'}>
      <SectionNav categories={textCategories} />

      {page}
    </Flex>
  );
}
