import { PageLink } from '@/types/nav';

import { BsFillGridFill, BsFillHouseHeartFill, BsImages } from 'react-icons/bs';
import { BiCodeBlock } from 'react-icons/bi';
export const navLinks: PageLink[] = [
  {
    label: 'home',
    path: '/',
    icon: BsFillHouseHeartFill
  },
  {
    label: 'sections.writers',
    path: '/write',
    icon: BsFillGridFill
  },
  {
    label: 'sections.images',
    path: '/images',
    icon: BsImages
  },
  {
    label: 'sections.coders',
    path: '/coders',
    icon: BiCodeBlock
  }
];
