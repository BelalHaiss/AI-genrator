import { Flex, Spinner } from '@chakra-ui/react';

export default function () {
  return (
    <Flex w='full' justify={'center'} align={'center'}>
      <Spinner h='200px' w={'200px'} mt='10' />
    </Flex>
  );
}
