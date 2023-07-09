import { IconType } from 'react-icons/lib';
import { RequestKeys, RequestServices } from './request';
import { FormField } from './FormControl';

export interface BoxCard<path = string> {
  title: string;
  desc: string;
  link: path;
  icon: {
    color: string;
    icon: IconType;
  };
  tools?: number;
  service?: RequestServices;
  formFields?: FormField<RequestKeys>[];
}

export interface CardPage {
  path: string;
  cards: BoxCard[];
}
export type TextCardPaths =
  | '/write/doc'
  | '/write/ads'
  | '/write/emails-message'
  | '/write/company'
  | '/write/seo'
  | '/write/social';
