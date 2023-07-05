import { CardsWrapper } from '@/components/cards/CardsWrapper';
import { getPageCards } from '@/components/cards/util/text.card.util';
import { TextCardPaths } from '@/types/card';
import { useRouter } from 'next/router';
import { writeLayout } from '.';

function Page() {
  const { asPath } = useRouter();
  const cards = getPageCards(asPath as TextCardPaths);
  return <CardsWrapper cards={cards} />;
}

Page.getLayout = writeLayout;

export default Page;
