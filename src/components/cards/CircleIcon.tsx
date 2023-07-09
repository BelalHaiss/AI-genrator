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
      minH='50px'
      minW='50px'
      borderRadius={'25px'}
    >
      <Icon as={icon.icon} w='6' h='6' color={icon.color + '.600'} />
    </Center>
  );
}
