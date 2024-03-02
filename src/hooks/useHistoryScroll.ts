import { useEffect } from 'react';

interface Props {
  selectedKey: string | null;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setShouldFetch: React.Dispatch<React.SetStateAction<boolean>>;
}

function useHistoryScroll({ selectedKey, setPage, setShouldFetch }: Props) {
  useEffect(() => {
    function handleScroll() {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 200
      ) {
        if (selectedKey) {
          setPage((prevPage) => prevPage + 1);
          setShouldFetch(true);
        }
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedKey, setPage, setShouldFetch]);
}

export default useHistoryScroll;
