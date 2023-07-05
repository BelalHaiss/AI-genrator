import { useHideTopNav } from '@/hooks/useTopNav';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const WriteWrapper = ({ children }: Props) => {
  useHideTopNav();

  return <>{children}</>;
};
