import { useEffect } from 'react';

import Chart from '../components/Chart';
import useCommentStore from '../hooks/useCommentStore';

import usePostStore from '../hooks/usePostStore';

export default function ChartPage() {
  const postStore = usePostStore();

  const commentStore = useCommentStore();

  useEffect(() => {
    postStore.fetchPostsByDate();
    commentStore.fetchCommentsByDate();
  }, []);

  const today = new Date().getDate();

  let aDayAgo = today - 1;
  let twoDaysAgo = today - 2;
  let threeDaysAgo = today - 3;
  let fourDaysAgo = today - 4;
  let fiveDaysAgo = today - 5;
  let sixDaysAgo = today - 6;

  const computeDay = (number) => {
    const today = new Date();
    const daysAgo = number;
    const days = new Date(today - (3600000 * 24 * daysAgo)).getDate();
    return days;
  };

  if (aDayAgo <= 0) {
    aDayAgo = computeDay(1);
  }

  if (twoDaysAgo <= 0) {
    twoDaysAgo = computeDay(2);
  }

  if (threeDaysAgo <= 0) {
    threeDaysAgo = computeDay(3);
  }

  if (fourDaysAgo <= 0) {
    fourDaysAgo = computeDay(4);
  }

  if (fiveDaysAgo <= 0) {
    fiveDaysAgo = computeDay(5);
  }

  if (sixDaysAgo <= 0) {
    sixDaysAgo = computeDay(6);
  }

  const days = {
    today,
    aDayAgo,
    twoDaysAgo,
    threeDaysAgo,
    fourDaysAgo,
    fiveDaysAgo,
    sixDaysAgo,
  };

  const { postsByDate } = postStore;
  const { commentsByDate } = commentStore;

  return (
    <Chart
      days={days}
      postsByDate={postsByDate}
      commentsByDate={commentsByDate}
    />
  );
}
