import { CustomFormControl } from '@/components/Forms/FormControl';
import { WriteRequestType, handleWriteChange } from '@/types/request';
import { Flex } from '@chakra-ui/react';

type Props = {
  values: WriteRequestType;
  handleChange: handleWriteChange;
};

export function CustomEmail({ values, handleChange }: Props) {
  return (
    <>
      <Flex flexDir={{ base: 'column', lg: 'row' }} w='90%' gap='1'>
        <CustomFormControl
          name='from'
          label='formlabel.email.from'
          value={values['from']}
          type='text'
          onChange={handleChange}
          width='100%'
        />
        <CustomFormControl
          name='to'
          label='formlabel.email.to'
          value={values['to']}
          type='text'
          onChange={handleChange}
          width='100%'
        />
      </Flex>

      <CustomFormControl
        name='description'
        label='formlabel.email.create'
        value={values['description']}
        type='text'
        onChange={handleChange}
      />
    </>
  );
}
