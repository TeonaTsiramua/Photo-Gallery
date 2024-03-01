// InfiniteScroll.js
import React, { useEffect } from 'react';

const InfiniteScroll = ({
  fetchMoreData,
}: {
  fetchMoreData: () => Promise<void>;
}) => {
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        fetchMoreData();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [fetchMoreData]);

  return null;
};

export default InfiniteScroll;
