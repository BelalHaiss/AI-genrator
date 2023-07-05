import { IconType } from 'react-icons/lib';

export interface BoxCard<path = string> {
  title: string;
  desc: string;
  link: path;
  icon: {
    color: string;
    icon: IconType;
  };
  tools?: number;
}

export interface CardPage {
  path: string;
  cards: BoxCard[];
}
export type TextCardPaths =
  | '/write/doc'
  | '/write/ads'
  | '/write/emails_message';
