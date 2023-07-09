import { createStandaloneToast } from '@chakra-ui/react';
import { theme } from './theme';
import getT from 'next-translate/getT';

const { toast: Toast } = createStandaloneToast(theme);

function handleTitle(status: Status) {
  switch (status) {
    case 'error':
      return 'error';

    case 'success':
      return 'success';
    default:
      return 'note';
  }
}
type Status = 'error' | 'info' | 'warning' | 'success' | 'loading' | undefined;
export default function ToastUtil(
  description: string,
  status: Status = 'error',
  duration = 2000
) {
  return Toast({
    title: handleTitle(status),
    description,
    status,
    duration
  });
}
