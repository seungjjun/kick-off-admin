import { useEffect } from 'react';

import DashBoard from '../components/DashBoard';

import usePostStore from '../hooks/usePostStore';

import useMemberStore from '../hooks/useMemberStore';

import useCommentStore from '../hooks/useCommentStore';

import useBoardStore from '../hooks/useBoardStore';

export default function DashBoardPage() {
  const boardStore = useBoardStore();

  const postStore = usePostStore();

  const memberStore = useMemberStore();

  const commentStore = useCommentStore();

  useEffect(() => {
    boardStore.fetchBoardRate();
    postStore.fetchTodayPosts();
    memberStore.fetchTodaySignupNumber();
    commentStore.fetchTodayComment();
  }, []);

  const { boardRate } = boardStore;
  const { todayCreatedPostsNumber } = postStore;
  const { todaySignupUserNumber } = memberStore;
  const { todayWrittenCommentsNumber } = commentStore;

  const statistics = {
    todayCreatedPostsNumber,
    todaySignupUserNumber,
    todayWrittenCommentsNumber,
  };

  return (
    <DashBoard
      statistics={statistics}
      boardRate={boardRate}
    />
  );
}
