import { useEffect } from 'react';

import DashBoard from '../components/DashBoard';

import usePostStore from '../hooks/usePostStore';

import useMemberStore from '../hooks/useMemberStore';

import useCommentStore from '../hooks/useCommentStore';

import useBoardStore from '../hooks/useBoardStore';

import useGradeStore from '../hooks/useGradeStore';

export default function DashBoardPage() {
  const boardStore = useBoardStore();

  const postStore = usePostStore();

  const memberStore = useMemberStore();

  const commentStore = useCommentStore();

  const gradeStore = useGradeStore();

  useEffect(() => {
    boardStore.fetchBoardRate();
    postStore.fetchTodayPosts();
    postStore.fetchPosts();
    memberStore.fetchTodaySignupNumber();
    memberStore.fetchUsers();
    commentStore.fetchTodayComment();
    gradeStore.fetchProcessingApplication();
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
