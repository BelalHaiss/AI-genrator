import { useEffect } from 'react';
const getElements = () => {
  const topNav = document.getElementById('top-nav');
  const main = document.getElementById('app-main');
  return { main, topNav };
};
const hideTopNav = () => {
  const { main, topNav } = getElements();
  topNav!.style.display = 'none';
  main!.style.minHeight = '100vh';
};
const showTopNav = () => {
  const { main, topNav } = getElements();
  topNav!.style.display = 'flex';
  main!.style.removeProperty('min-height');
};
export const useHideTopNav = () => {
  useEffect(() => {
    hideTopNav();

    return () => {
      showTopNav();
    };
  }, []);
};
