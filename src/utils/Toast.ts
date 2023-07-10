import { createStandaloneToast } from '@chakra-ui/react';
import { theme } from './theme';
import getT from 'next-translate/getT';

const { toast: Toast } = createStandaloneToast(theme);

type Status = 'error' | 'info' | 'warning' | 'success' | 'loading' | undefined;
export default function ToastUtil(
  description: string,
  title = '',
  status: Status = 'error',
  duration = 2000
) {
  return Toast({
    title,
    description,
    status,
    duration
  });
}
