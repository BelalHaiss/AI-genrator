import { FormField } from '@/types/FormControl';
import { RequestKeys, RequestServices } from '@/types/request';
import { useState } from 'react';
import { WriteRequest } from './WriteRequest';
import { Flex } from '@chakra-ui/react';
import { Write_Response } from './Write_Response';
import { WriteResponse } from '@/types/response';
import { BoxCard } from '@/types/card';

type Props = {
  formFields?: FormField<RequestKeys>[];
  service: RequestServices;
  CustomComponent?: BoxCard['CustomComponent'];
  req_body?: BoxCard['req_body'];
};

export function Write_Sandbox({
  formFields,
  CustomComponent,
  service,
  req_body
}: Props) {
  const [res, setRes] = useState<WriteResponse | null | 'loading'>(null);

  return (
    <Flex w='full' gap='1' flexDir={{ base: 'column', md: 'row' }} minH='100%'>
      <Flex flex='4'>
        <WriteRequest
          CustomComponent={CustomComponent}
          service={service}
          formFields={formFields}
          req_body={req_body}
          setRes={setRes}
        />
      </Flex>
      <Flex flex='6'>
        <Write_Response res={res} />
      </Flex>
    </Flex>
  );
}
