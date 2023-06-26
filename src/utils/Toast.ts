import { Toast } from '@chakra-ui/toast';

function handleTitle(status: Status) {
  switch (status) {
    case 'error':
      return 'حدث خطا';

    case 'success':
      return 'تم بنجاح';
    default:
      return 'ملاحظه';
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
