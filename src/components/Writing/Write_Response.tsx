import { WriteResponse } from '@/types/response';
import { Flex, Spinner, Text } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import { WriteCard } from './WriteCard';

type Props = {
  res: WriteResponse | null | 'loading';
};

export function Write_Response({ res }: Props) {
  const { t } = useTranslation('form');
  return (
    <Flex flexDir={'column'} p='4' align={'center'} w='full' h='full' gap='1'>
      {!res && <Text>{t('fill.fields')}</Text>}

      {res === 'loading' && <Spinner />}

      <Flex flexDir={'column'} gap='4' w='full'>
        {typeof res === 'object' &&
          res?.response.map((singleRes, i) => (
            <WriteCard writeRes={singleRes} key={i} />
          ))}
      </Flex>
    </Flex>
  );
}
