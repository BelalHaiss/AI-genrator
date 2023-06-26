import { create } from 'zustand';
import { UserType } from '../types/user';
import { persist, devtools } from 'zustand/middleware';

interface storeType {
  user: UserType;
}

const initialStore: storeType = {
  user: {
    name: 'Medo'
  }
};

export const useStore = create<storeType>()((set) => ({
  ...initialStore
}));
