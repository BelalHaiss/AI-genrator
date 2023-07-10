import { RequestBody } from '@/types/request';
import { Center, Flex, FormControl, FormLabel } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import { useEffect, useState } from 'react';

type Props = {
  setValue: (name: 'numberOfGenerated', value: number) => void;
  value?: number;
};
const opts: number[] = [1, 2, 3, 4];
export function SquareRadios({ setValue, value = 1 }: Props) {
  const { t } = useTranslation('form');
  const [selectedValue, setSelectedValue] = useState(value);

  useEffect(() => {
    setValue('numberOfGenerated', selectedValue);
  }, [selectedValue]);

  return (
    <FormControl w='90%'>
      <FormLabel>{t('results-counts')}</FormLabel>
      <Flex mt='3' align={'center'} justify={'space-around'}>
        {opts.map((opt) => (
          <Center
            w='40px'
            boxShadow={'lg'}
            borderRadius={'lg'}
            h='40px'
            onClick={() => setSelectedValue(opt)}
            color={opt === selectedValue ? '#2B6CB0' : 'black'}
            bg='gray.50'
            cursor={'pointer'}
            outline={opt === selectedValue ? '2px solid #2B6CB0' : ''}
            key={opt}
          >
            {opt}
          </Center>
        ))}
      </Flex>
    </FormControl>
  );
}
