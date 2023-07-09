import { RequestKeys } from './request';

export interface FormField<Name = RequestKeys, OPTS = SelectInput[]> {
  name: Name;
  value: any;
  label: string;
  type:
    | 'select'
    | 'radio'
    | 'square-radio'
    | 'number'
    | 'text'
    | 'half-input'
    | 'textarea';
  placeholder?: string;
  options?: string[] | number[];
}
