import { useEffect } from 'react';

const SCROLL_THRESHOLD = 100;

function useScrollHandler(callback: () => void) {
  useEffect(() => {
    function handleScroll() {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - SCROLL_THRESHOLD
      ) {
        callback();
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [callback]);
}

export default useScrollHandler;
