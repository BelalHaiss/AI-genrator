import { Req_language } from '@/types/request';
import { CustomFormControl } from './FormControl';

type Props = {
  setValue: (name: 'language', value: Req_language) => void;
  value?: Req_language;
};

const lang_options: Req_language[] = ['Arabic', 'English'];

export function LanguageSelect({ setValue, value = 'Arabic' }: Props) {
  return (
    <CustomFormControl
      value={value}
      onChange={setValue}
      type='select'
      options={lang_options}
      name={'language'}
      placeholder='placeholder.language'
      label={'select.language'}
    />
  );
}
