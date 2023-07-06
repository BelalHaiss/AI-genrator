import { WriteWrapper } from '@/components/Writing/WriteWrapper';
import { Write_Header } from '@/components/Writing/Write_Header';
import { Write_Sandbox } from '@/components/Writing/Write_Sandbox';
import { FormField } from '@/types/FormControl';
import { RequestKeys } from '@/types/request';

const formFields: FormField<RequestKeys>[] = [
  {
    name: 'description',
    label: 'formlabel.article.create',
    type: 'text',
    value: ''
  }
];
function Page() {
  return (
    <WriteWrapper>
      <Write_Header label='write-article' />
      <Write_Sandbox service='ArticleWriter' formFields={formFields} />
    </WriteWrapper>
  );
}

export default Page;
