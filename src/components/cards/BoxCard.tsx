import { BoxCard as BoxCardType } from '@/types/card';
import { Flex, Text } from '@chakra-ui/react';
import { CircleIcon } from './CircleIcon';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

type Props = {
  item: BoxCardType;
};

export function BoxCard({ item }: Props) {
  const { t } = useTranslation('write');
  const router = useRouter();
  return (
    <Flex
      py='2'
      px='1'
      borderRadius={'lg'}
      bg='gray.50'
      gap='3'
      cursor={'pointer'}
      align={'center'}
      _hover={{
        outline: '2px solid #2B6CB0'
      }}
      onClick={() => router.push(item.link)}
      minH={'120px'}
      boxShadow={'xl'}
      w={['260px', '300px', '400px']}
    >
      <CircleIcon icon={item.icon} />
      {/* Text part */}
      <Flex flexDir={'column'}>
        <Text fontSize={'lg'} fontWeight={'bold'}>
          {t(item.title)}
        </Text>

        <Text fontWeight={'thin'} color={'gray.500'} fontSize={'sm'}>
          {t(item.desc)}
        </Text>
      </Flex>

      {/*  nested path ??  */}
      {/* {item.tools} */}
    </Flex>
  );
}
