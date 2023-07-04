import { BoxCard } from '@/types/card';
import { BsFacebook, BsFillChatSquareTextFill, BsGoogle } from 'react-icons/bs';
import { RiMailCheckFill } from 'react-icons/ri';
import { HiSpeakerphone } from 'react-icons/hi';
import { MdArticle, MdShortText } from 'react-icons/md';

export const textCards: BoxCard[] = [
  {
    title: 'docs',
    desc: 'docs-desc',
    link: '/docs',
    tools: 10,
    icon: {
      color: 'green',
      icon: BsFillChatSquareTextFill
    }
  },
  {
    title: 'emails_message',
    desc: 'emails_message-desc',
    link: '/emails_message',
    tools: 2,
    icon: {
      color: 'green',
      icon: RiMailCheckFill
    }
  },
  {
    title: 'ads',
    desc: 'ads-desc',
    link: '/ads',
    tools: 3,
    icon: {
      color: 'green',
      icon: HiSpeakerphone
    }
  }
];

export const docsCards: BoxCard[] = [
  {
    title: 'docs-article',
    desc: 'docs-article-desc',
    link: '/docs-article',
    tools: 10,
    icon: {
      color: 'purple',
      icon: MdArticle
    }
  },
  {
    title: 'docs-summary',
    desc: 'docs-summary-desc',
    link: '/docs-summary',
    tools: 10,
    icon: {
      color: 'purple',
      icon: MdShortText
    }
  }
];

export const mailsCards: BoxCard[] = [
  {
    title: 'emails_message-email',
    desc: 'emails_message-email-desc',
    link: '/emails_message-email',
    tools: 10,
    icon: {
      color: 'purple',
      icon: RiMailCheckFill
    }
  },
  {
    title: 'emails_message-sms',
    desc: 'emails_message-sms-desc',
    link: '/emails_message-sms',
    tools: 10,
    icon: {
      color: 'purple',
      icon: MdShortText
    }
  }
];
export const adsCards: BoxCard[] = [
  {
    title: 'ads-fb',
    desc: 'ads-fb-desc',
    link: '/ads-fb',
    tools: 10,
    icon: {
      color: 'purple',
      icon: BsFacebook
    }
  },
  {
    title: 'ads-google',
    desc: 'ads-google-desc',
    link: '/ads-google',
    tools: 10,
    icon: {
      color: 'purple',
      icon: BsGoogle
    }
  }
];
