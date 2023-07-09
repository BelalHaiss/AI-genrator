import { WriteResType } from '@/types/response';
import { Flex, Icon, Text } from '@chakra-ui/react';

type Props = {
  writeRes: WriteResType;
};

export function WriteCard({ writeRes }: Props) {
  return (
    <Flex
      w='full'
      bg='gray.50'
      p='4'
      gap='6'
      flexDir={'column'}
      borderRadius={'xl'}
      position={'relative'}
      layerStyle={'flexCenter'}
    >
      <Text style={{ whiteSpace: 'pre-wrap' }}> {writeRes.content}</Text>
      <Text>{writeRes.count}</Text>
    </Flex>
  );
}
