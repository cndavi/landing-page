import { useEffect } from 'react';
import gsap from 'gsap';
import { debounce } from 'lodash-es';

const onResize = () => {
  const { innerHeight, innerWidth } = window;
  document.documentElement.style.setProperty('--vh', `${innerHeight * 0.01}px`);

  const mouthScale = gsap.utils.mapRange(375, 1920, 5.2, 7, innerWidth);
  document.documentElement.style.setProperty('--mouthScale', `${mouthScale}`);
};

const onResizeDelayed = debounce(onResize, 150);

export const useCssViewportValues = (): void => {
  useEffect(() => {
    window.addEventListener('resize', onResizeDelayed);
    onResizeDelayed();
    return () => {
      window.removeEventListener('resize', onResizeDelayed);
    };
  }, []);
};
