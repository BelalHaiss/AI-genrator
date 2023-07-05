import { BoxCard as BoxCardType } from '@/types/card';
import { Flex } from '@chakra-ui/react';
import { BoxCard } from './BoxCard';

type Props = {
  cards: BoxCardType[];
};

export function CardsWrapper({ cards }: Props) {
  return (
    <Flex layerStyle={'flexCenter'} wrap={'wrap'} gap='5' p='2'>
      {cards.map((card) => (
        <BoxCard key={card.title} item={card} />
      ))}
    </Flex>
  );
}
