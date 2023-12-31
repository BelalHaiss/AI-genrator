import { useCallback, useEffect, useState } from 'react';

export const useDimension = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const getDimenson = () => ({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const handleResize = useCallback(() => setDimensions(getDimenson()), []);
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return dimensions;
};
