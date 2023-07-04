import { IconType } from 'react-icons/lib';

export interface BoxCard {
  title: string;
  desc: string;
  link: string;
  icon: {
    color: string;
    icon: IconType;
  };
  tools?: number;
}
