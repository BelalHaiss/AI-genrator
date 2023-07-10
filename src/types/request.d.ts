export type RequestKeys =
  | 'language'
  | 'description'
  | 'tone'
  | 'numberOfGenerated'
  | 'service'
  | EmailKeys;

type EmailKeys = 'from' | 'to';
export type RequestValues =
  | Req_language
  | RequestServices
  | RequestTone
  | string
  | number;

export type Type_With_Undefined<T> = ReturnType<
  () => {
    [key in keyof T]: T[key] | '';
  }
>;

export interface RequestBody extends Record<RequestKeys, RequestValues> {
  service: RequestServices;
  language: Req_language;
  tone: RequestTone;
  numberOfGenerated: number;
  description: string;
}

// components types start
export type WriteRequestType = Partial<Type_With_Undefined<RequestBody>>;
export type handleWriteChange = (
  name: RequestKeys,
  value: RequestValues
) => void;

// components types end

export type Req_language = 'English' | 'Arabic';

export type RequestServices =
  | 'StartFragment'
  | 'blogIdea'
  | 'blogTitles'
  | 'questions'
  | 'passiveActiveVoice'
  | 'prosCons'
  | 'rewriteWithKeywords'
  | 'emailSubjectLines'
  | 'startupNameGenerator'
  | 'summarize2ndGrader'
  | 'bulletPointAnswers'
  | 'definition'
  | 'answers'
  | 'productNameGenerator'
  | 'instagramCaptions'
  | 'instagramHashtags'
  | 'twitterTweets'
  | 'twitterHashtags'
  | 'facebookPosts'
  | 'linkedinPosts'
  | 'youtubeTitles'
  | 'youtubeDescriptions'
  | 'youtubeOutlines'
  | 'tiktokVideosScripts'
  | 'toneChanger'
  | 'SMSNotifications'
  | 'contentShorten'
  | 'blogIntro'
  | 'blogSection'
  | 'blogConclusion'
  | 'articleOutlines'
  | 'talkingPoints'
  | 'quoraAnswers'
  | 'ArticleWriter'
  | 'companyBios'
  | 'companyMission'
  | 'companyVision'
  | 'productDescriptions'
  | 'productFeatures'
  | 'productTitles'
  | 'socialPostPersonal'
  | 'faqs'
  | 'testimonialReview'
  | 'articleRewriter'
  | 'paragraphWriter'
  | 'contentRephrase'
  | 'textExtender'
  | 'metaTagsBlog'
  | 'metaTagsHomepage'
  | 'facebookAds'
  | 'facebookAdsHeadlines'
  | 'googleAdsTitles'
  | 'googleAdsDescriptions'
  | 'linkedinAdsHeadlines'
  | 'linkedinAdsDescriptions'
  | 'storyWriter'
  | 'email'
  | 'emailV2'
  | 'socialPostBusiness'
  | 'metaTagsProduct'
  | 'faqAnswers';

export type RequestTone =
  | 'funny'
  | 'casual'
  | 'excited'
  | 'professional'
  | 'witty'
  | 'sarcastic'
  | 'feminine'
  | 'masculine'
  | 'bold'
  | 'dramatic'
  | 'grumpy'
  | 'secretive'
  | 'sweet'
  | 'serious';
