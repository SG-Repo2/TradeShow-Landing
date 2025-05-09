import { useState, useEffect } from 'react';

// Custom hook for responsive design
const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = (): void => setMatches(media.matches);
    media.addEventListener('change', listener);
    
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
};

// Predefined breakpoints for consistency
export const breakpoints = {
  phone: '(max-width: 480px)',
  tablet: '(min-width: 481px) and (max-width: 768px)',
  laptop: '(min-width: 769px) and (max-width: 1440px)',
  desktop: '(min-width: 1441px)',
};

export default useMediaQuery;