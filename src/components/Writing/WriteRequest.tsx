import { FormField } from '@/types/FormControl';
import { Button, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { getInitial_state, writeSchema } from './util/write_req.util';
import {
  RequestBody,
  RequestKeys,
  RequestServices,
  RequestValues
} from '@/types/request';
import { ToneSelect } from '../Forms/ContentTune';
import { LanguageSelect } from '../Forms/LanguageSelect';
import useTranslation from 'next-translate/useTranslation';
import { CustomFormControl } from '../Forms/FormControl';
import { SquareRadios } from '../Forms/ResultRadio';
import { fetcher } from '@/utils/fetcher';
import { WriteResponse } from '@/types/response';
import ToastUtil from '@/utils/Toast';

type Props = {
  setRes: (res: WriteResponse | 'loading') => void;
  formFields?: FormField<RequestKeys>[];
  service: RequestServices;
};
type FooterProps = {
  handleChange: (name: RequestKeys, value: RequestValues) => void;
};

export function WriteRequest({ setRes, formFields, service }: Props) {
  const { t } = useTranslation('form');
  const [state, setState] = useState(() => getInitial_state(service));
  const handleChange = <T extends keyof RequestBody>(
    name: T,
    value: RequestBody[T]
  ) => setState((old) => ({ ...old, [name]: value }));

  const handleSubmit = async () => {
    const { error } = writeSchema.validate(state);
    if (error) {
      ToastUtil(t('fill.fields'));
      return;
    }
    setRes('loading');
    const res = await fetcher({
      url: '/chat',
      requestOption: {
        method: 'post',
        data: state
      }
    });
    setRes(res);
  };
  return (
    <Flex
      flexDir={'column'}
      align={'center'}
      p='5'
      bg='gray.200'
      gap='5'
      w='full'
      h='full'
    >
      {formFields?.map((field) => (
        <CustomFormControl
          key={field.name}
          {...field}
          value={state[field.name]}
          onChange={handleChange}
        />
      ))}
      <RequestFooter handleChange={handleChange} />
      <Button
        mt='3'
        w='150px'
        size='lg'
        borderRadius={'full'}
        colorScheme='teal'
        onClick={handleSubmit}
      >
        {t('generate')}
      </Button>
    </Flex>
  );
}

function RequestFooter({ handleChange }: FooterProps) {
  return (
    <>
      <LanguageSelect setValue={handleChange} />
      <ToneSelect setValue={handleChange} />
      <SquareRadios setValue={handleChange} />
    </>
  );
}
