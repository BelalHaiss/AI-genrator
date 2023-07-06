import { FormField } from '@/types/FormControl';
import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select
} from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import { ChangeEvent } from 'react';

type Props = FormField & {
  onChange: (name: any, value: any) => void;
  isError?: boolean;
  errorText?: string;
  width?: string;
};

export function CustomFormControl({
  type,
  label,
  placeholder,
  options,
  value,
  name,
  onChange,
  isError,
  width,
  errorText
}: Props) {
  const { t } = useTranslation('form');
  const normalOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value } = e.target;
    if (!value) return;
    onChange(name, type === 'number' ? +value : value);
  };
  if (type === 'text' || type === 'number') {
    return (
      <FormControl w={width ?? '90%'} isInvalid={isError ?? false}>
        <FormLabel fontWeight={'bold'} htmlFor={name}>
          {t(label)}
        </FormLabel>
        <Flex position={'relative'}>
          <Input
            id={name}
            name={name}
            color={'black'}
            min={type === 'number' ? 0 : ''}
            value={value as string}
            bg={'gray.100'}
            placeholder={t(placeholder ?? '')}
            type={type}
            onChange={normalOnChange}
          />
        </Flex>

        {isError && <FormErrorMessage>{errorText}</FormErrorMessage>}
      </FormControl>
    );
  } else if (type === 'select' && options) {
    return (
      <FormControl w={width ?? '90%'}>
        <FormLabel htmlFor={name}>{t(label)}</FormLabel>
        <Select defaultValue={''} onChange={normalOnChange} bg='gray.100'>
          <option disabled aria-readonly value=''>
            {t(placeholder ?? '')}
          </option>
          {options.map((opt) => (
            <option color={'black'} key={opt} value={opt}>
              {/* @ts-ignore */}
              {t(opt)}
            </option>
          ))}
        </Select>
      </FormControl>
    );
  }
  return null;
}
