export interface FormField<Name = string, OPTS = SelectInput[]> {
  name: Name;
  value: any;
  label: string;
  type: 'select' | 'radio' | 'square-radio' | 'number' | 'text';
  placeholder?: string;
  options?: string[] | number[];
}
