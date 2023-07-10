import { WriteWrapper } from '@/components/Writing/WriteWrapper';
import { Write_Header } from '@/components/Writing/Write_Header';
import { Write_Sandbox } from '@/components/Writing/Write_Sandbox';
import { seoCards } from '@/components/cards/util/text.card.util';
import { BoxCard } from '@/types/card';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const getCard = (query: string) =>
  seoCards.find((card) => card.link.includes(query));

function Page() {
  const { query, replace } = useRouter();
  const [card, setCard] = useState<BoxCard | null>(null);
  useEffect(() => {
    const { seo } = query;
    if (!seo) {
      replace('/write');
      return;
    }
    const selectedCard = getCard(seo as string);
    selectedCard ? setCard(selectedCard) : replace('/write');
  }, []);

  if (!card) return;
  return (
    <WriteWrapper>
      <Write_Header label={card.title} />
      <Write_Sandbox service={card.service!} formFields={card.formFields} />
    </WriteWrapper>
  );
}

export default Page;
