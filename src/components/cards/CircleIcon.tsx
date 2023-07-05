import { BoxCard } from '@/types/card';
import { Center, Icon } from '@chakra-ui/react';

type Props = {
  icon: BoxCard['icon'];
};

export function CircleIcon({ icon }: Props) {
  return (
    <Center
      p='2'
      bg={icon.color + '.100'}
      h='50px'
      w='50px'
      borderRadius={'25px'}
    >
      <Icon as={icon.icon} color={icon.color + '.600'} />
    </Center>
  );
}
