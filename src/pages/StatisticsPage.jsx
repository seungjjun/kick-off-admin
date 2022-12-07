import { useEffect } from 'react';

import Statistics from '../components/Statistics';

import usePostStore from '../hooks/usePostStore';

export default function StatisticsPage() {
  const postStore = usePostStore();

  useEffect(() => {
    postStore.fetchMostHitPosts();
  }, []);

  const { mostHitPosts } = postStore;
  const { users } = postStore;

  return (
    <Statistics
      mostHitPosts={mostHitPosts}
      users={users}
    />
  );
}
