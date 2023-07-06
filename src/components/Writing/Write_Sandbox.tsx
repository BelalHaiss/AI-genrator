import { FormField } from '@/types/FormControl';
import { RequestKeys, RequestServices } from '@/types/request';
import { useState } from 'react';
import { WriteRequest } from './WriteRequest';
import { Flex } from '@chakra-ui/react';
import { Write_Response } from './Write_Response';
import { WriteResponse } from '@/types/response';

type Props = {
  formFields?: FormField<RequestKeys>[];
  service: RequestServices;
};

export function Write_Sandbox({ formFields, service }: Props) {
  const [res, setRes] = useState<WriteResponse | null | 'loading'>(null);

  return (
    <Flex w='full' gap='1' flexDir={{ base: 'column', md: 'row' }} minH='100%'>
      <Flex flex='4'>
        <WriteRequest
          service={service}
          formFields={formFields}
          setRes={setRes}
        />
      </Flex>
      <Flex flex='6'>
        <Write_Response res={res} />
      </Flex>
    </Flex>
  );
}
