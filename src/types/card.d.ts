import { IconType } from 'react-icons/lib';
import {
  RequestBody,
  RequestServices,
  RequestValues,
  WriteRequestType,
  handleWriteChange
} from './request';
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
  // below properties is card with form page
  service?: RequestServices;
  req_body?: WriteRequestType;
  formFields?: FormField[];
  CustomComponent?: React.FunctionComponent<{
    values: WriteRequestType;
    handleChange: handleWriteChange;
  }>;
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
