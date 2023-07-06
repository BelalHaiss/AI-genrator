import { RequestTone } from '@/types/request';
import { CustomFormControl } from './FormControl';

type Props = {
  setValue: (name: 'tone', value: RequestTone) => void;
  value?: RequestTone;
};

const tone_options: RequestTone[] = [
  'funny',
  'casual',
  'excited',
  'professional',
  'witty',
  'sarcastic',
  'feminine',
  'masculine',
  'bold',
  'dramatic',
  'grumpy',
  'secretive',
  'sweet',
  'serious'
];

export function ToneSelect({ setValue, value = 'professional' }: Props) {
  return (
    <CustomFormControl
      value={value}
      onChange={setValue}
      type='select'
      options={tone_options}
      name={'tone'}
      placeholder='placeholder.tone'
      label={'select.tone'}
    />
  );
}
