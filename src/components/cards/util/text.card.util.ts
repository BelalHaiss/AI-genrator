import { BoxCard, CardPage, TextCardPaths } from '@/types/card';
import {
  BsFacebook,
  BsFillChatSquareTextFill,
  BsGoogle,
  BsLinkedin,
  BsSearchHeartFill
} from 'react-icons/bs';
import { RiMailCheckFill } from 'react-icons/ri';
import { HiSpeakerphone } from 'react-icons/hi';
import {
  MdArticle,
  MdBusinessCenter,
  MdGppGood,
  MdShortText
} from 'react-icons/md';
import { TbSeo } from 'react-icons/tb';
import { AiFillLike } from 'react-icons/ai';
import { NavCategories } from '@/types/section-nav';
import { BiTask } from 'react-icons/bi';
import { FaMicroblog } from 'react-icons/fa';

const mainPath = '/write';
// main text cards start
export const textCards: BoxCard<TextCardPaths>[] = [
  {
    title: 'doc.title',
    desc: 'doc.desc',
    link: '/write/doc',
    tools: 12,
    icon: {
      color: 'green',
      icon: BsFillChatSquareTextFill
    }
  },
  {
    title: 'emails-message.title',
    desc: 'emails-message.desc',
    link: '/write/emails-message',
    tools: 2,
    icon: {
      color: 'blue',
      icon: RiMailCheckFill
    }
  },
  {
    title: 'ads.title',
    desc: 'ads.desc',
    link: '/write/ads',
    tools: 3,
    icon: {
      color: 'pink',
      icon: HiSpeakerphone
    }
  },
  {
    title: 'company-content-writing.title',
    desc: 'company-content-writing.desc',
    link: '/write/company',
    tools: 3,
    icon: {
      color: 'red',
      icon: MdBusinessCenter
    }
  },
  {
    title: 'seo.title',
    desc: 'seo.desc',
    link: '/write/seo',
    tools: 3,
    icon: {
      color: 'yellow',
      icon: TbSeo
    }
  },
  {
    title: 'social.title',
    desc: 'social.desc',
    link: '/write/social',
    tools: 3,
    icon: {
      color: 'blue',
      icon: AiFillLike
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
    case '/write/emails-message':
      return mailsCards;
    case '/write/ads':
      return adsCards;
    case '/write/company':
      return companyCards;
    case '/write/seo':
      return seoCards;
    case '/write/social':
      return socialCards;
  }
};

// docs cards
const docPath: TextCardPaths = '/write/doc';
export const docsCards: BoxCard[] = [
  {
    title: 'doc.write-article',
    desc: 'doc.write-article-desc',
    link: docPath + '/write-article',
    tools: 10,
    icon: {
      color: 'purple',
      icon: MdArticle
    },
    service: 'ArticleWriter',
    formFields: [
      {
        name: 'description',
        label: 'formlabel.article.create',
        type: 'text',
        value: ''
      }
    ]
  },
  {
    title: 'doc.write-summary',
    desc: 'doc.write-summary-desc',
    link: docPath + '/write-summary',
    tools: 10,
    icon: {
      color: 'purple',
      icon: MdShortText
    },
    service: 'summarize2ndGrader',
    formFields: [
      {
        name: 'description',
        label: 'formlabel.article.summarize',
        type: 'textarea',
        value: ''
      }
    ]
  }
];

// mails cards
const mailPath: TextCardPaths = '/write/emails-message';
export const mailsCards: BoxCard[] = [
  {
    title: 'emails-message.email',
    desc: 'emails-message.email-desc',
    link: mailPath + '/emails-message-email',
    tools: 10,
    icon: {
      color: 'blue',
      icon: RiMailCheckFill
    },
    service: 'email',
    formFields: [
      {
        name: 'description',
        label: 'formlabel.email.create',
        type: 'text',
        value: ''
      }
    ]
  },
  {
    title: 'emails-message.sms',
    desc: 'emails-message.sms-desc',
    link: mailPath + '/emails-message-sms',
    tools: 10,
    icon: {
      color: 'blue',
      icon: MdShortText
    },
    service: 'SMSNotifications',
    formFields: [
      {
        name: 'description',
        label: 'formlabel.sms.create',
        type: 'text',
        value: ''
      }
    ]
  }
];

// ads cards
const adsPath: TextCardPaths = '/write/ads';

export const adsCards: BoxCard[] = [
  {
    title: 'ads.fb',
    desc: 'ads.fb-desc',
    link: adsPath + '/ads-fb',
    tools: 10,
    icon: {
      color: 'pink',
      icon: BsFacebook
    },
    service: 'facebookAds',
    formFields: [
      {
        name: 'description',
        label: 'formlabel.fb.create',
        type: 'text',
        value: ''
      }
    ]
  },
  {
    title: 'ads.google',
    desc: 'ads.google-desc',
    link: adsPath + '/ads-google',
    tools: 10,
    icon: {
      color: 'pink',
      icon: BsGoogle
    },
    service: 'googleAdsDescriptions',
    formFields: [
      {
        name: 'description',
        label: 'formlabel.linkedin.create',
        type: 'text',
        value: ''
      }
    ]
  }
];

// company content cards
const companyPath: TextCardPaths = '/write/company';
export const companyCards: BoxCard[] = [
  {
    title: 'company-content-writing.productFeatures',
    desc: 'company-content-writing.productFeatures-desc',
    link: companyPath + '/productFeatures',
    tools: 10,
    icon: {
      color: 'red',
      icon: MdGppGood
    },
    service: 'productFeatures',
    formFields: [
      {
        name: 'description',
        label: 'formlabel.company.productFeatures-create',
        type: 'text',
        value: ''
      }
    ]
  },
  {
    title: 'company-content-writing.companyMission',
    desc: 'company-content-writing.companyMission-desc',
    link: companyPath + '/companyMission',
    tools: 10,
    icon: {
      color: 'red',
      icon: BiTask
    },
    service: 'companyMission',
    formFields: [
      {
        name: 'description',
        label: 'formlabel.company.companyMission-create',
        type: 'text',
        value: ''
      }
    ]
  }
];

// seo content cards
const seoPath: TextCardPaths = '/write/seo';
export const seoCards: BoxCard[] = [
  {
    title: 'seo.keywordsgenrator',
    desc: 'seo.keywordsgenrator-desc',
    link: seoPath + '/keywordsgenrator',
    tools: 10,
    icon: {
      color: 'yellow',
      icon: BsSearchHeartFill
    },
    service: 'rewriteWithKeywords',
    formFields: [
      {
        name: 'description',
        label: 'formlabel.seo.keywordgenrator-create',
        type: 'text',
        value: ''
      }
    ]
  },
  {
    title: 'seo.blogpost',
    desc: 'seo.blogpost-desc',
    link: seoPath + '/blogpost',
    tools: 10,
    icon: {
      color: 'yellow',
      icon: FaMicroblog
    },
    service: 'blogIdea',
    formFields: [
      {
        name: 'description',
        label: 'formlabel.seo.blogpost-create',
        type: 'text',
        value: ''
      }
    ]
  }
];

// social content cards
const socialPath: TextCardPaths = '/write/social';
export const socialCards: BoxCard[] = [
  {
    title: 'social.facebookPosts',
    desc: 'social.facebookPosts-desc',
    link: socialPath + '/facebookPost',
    tools: 10,
    icon: {
      color: 'blue',
      icon: BsFacebook
    },
    service: 'facebookPosts',
    formFields: [
      {
        name: 'description',
        label: 'formlabel.social.fb-create',
        type: 'text',
        value: ''
      }
    ]
  },
  {
    title: 'social.linkedinPosts',
    desc: 'social.linkedinPosts-desc',
    link: socialPath + '/linkedinPosts',
    tools: 10,
    icon: {
      color: 'blue',
      icon: BsLinkedin
    },
    service: 'linkedinPosts',
    formFields: [
      {
        name: 'description',
        label: 'formlabel.social.linkedin-create',
        type: 'text',
        value: ''
      }
    ]
  }
];
