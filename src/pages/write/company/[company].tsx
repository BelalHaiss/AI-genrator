import { WriteWrapper } from '@/components/Writing/WriteWrapper';
import { Write_Header } from '@/components/Writing/Write_Header';
import { Write_Sandbox } from '@/components/Writing/Write_Sandbox';
import { companyCards } from '@/components/cards/util/text.card.util';
import { FormField } from '@/types/FormControl';
import { BoxCard } from '@/types/card';
import { RequestKeys } from '@/types/request';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const getCard = (query: string) =>
  companyCards.find((card) => card.link.includes(query));

const formFields: FormField<RequestKeys>[] = [
  {
    name: 'description',
    label: 'formlabel.article.create',
    type: 'text',
    value: ''
  }
];
function Page() {
  const { query, replace } = useRouter();
  const [card, setCard] = useState<BoxCard | null>(null);
  useEffect(() => {
    const { company } = query;
    if (!company) {
      replace('/write');
      return;
    }
    const selectedCard = getCard(company as string);
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
