import { BoxCard, CardPage, TextCardPaths } from '@/types/card';
import { BsFacebook, BsFillChatSquareTextFill, BsGoogle } from 'react-icons/bs';
import { RiMailCheckFill } from 'react-icons/ri';
import { HiSpeakerphone } from 'react-icons/hi';
import { MdArticle, MdShortText } from 'react-icons/md';
import { NavCategories } from '@/types/section-nav';

const mainPath = '/write';
// main text cards start
export const textCards: BoxCard<TextCardPaths>[] = [
  {
    title: 'doc',
    desc: 'doc-desc',
    link: '/write/doc',
    tools: 12,
    icon: {
      color: 'green',
      icon: BsFillChatSquareTextFill
    }
  },
  {
    title: 'emails_message',
    desc: 'emails_message-desc',
    link: '/write/emails_message',
    tools: 2,
    icon: {
      color: 'green',
      icon: RiMailCheckFill
    }
  },
  {
    title: 'ads',
    desc: 'ads-desc',
    link: '/write/ads',
    tools: 3,
    icon: {
      color: 'green',
      icon: HiSpeakerphone
    }
  }
];

export const textCategories: NavCategories[] = (() => {
  const allCards: NavCategories[] = [{ label: 'all', link: '/write' }];
  return allCards.concat(
    textCards.map((card) => ({ label: card.title, link: card.link }))
  );
})();

// main text cards ends

// all nested page cards
export const getPageCards = (path: TextCardPaths) => {
  switch (path) {
    case '/write/doc':
      return docsCards;
    case '/write/emails_message':
      return mailsCards;
    case '/write/ads':
      return adsCards;
  }
};

// docs cards
const docPath: TextCardPaths = '/write/doc';
export const docsCards: BoxCard[] = [
  {
    title: 'write-article',
    desc: 'write-article-desc',
    link: docPath + '/write-article',
    tools: 10,
    icon: {
      color: 'purple',
      icon: MdArticle
    }
  },
  {
    title: 'write-summary',
    desc: 'write-summary-desc',
    link: docPath + '/write-summary',
    tools: 10,
    icon: {
      color: 'purple',
      icon: MdShortText
    }
  }
];

// mails cards
const mailPath: TextCardPaths = '/write/emails_message';
export const mailsCards: BoxCard[] = [
  {
    title: 'emails_message-email',
    desc: 'emails_message-email-desc',
    link: mailPath + '/emails_message-email',
    tools: 10,
    icon: {
      color: 'purple',
      icon: RiMailCheckFill
    }
  },
  {
    title: 'emails_message-sms',
    desc: 'emails_message-sms-desc',
    link: mailPath + '/emails_message-sms',
    tools: 10,
    icon: {
      color: 'purple',
      icon: MdShortText
    }
  }
];

// ads cards
const adsPath: TextCardPaths = '/write/ads';

export const adsCards: BoxCard[] = [
  {
    title: 'ads-fb',
    desc: 'ads-fb-desc',
    link: adsPath + '/ads-fb',
    tools: 10,
    icon: {
      color: 'purple',
      icon: BsFacebook
    }
  },
  {
    title: 'ads-google',
    desc: 'ads-google-desc',
    link: adsPath + '/ads-google',
    tools: 10,
    icon: {
      color: 'purple',
      icon: BsGoogle
    }
  }
];
