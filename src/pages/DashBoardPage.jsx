import { useEffect } from 'react';

import DashBoard from '../components/DashBoard';

import usePostStore from '../hooks/usePostStore';

import useMemberStore from '../hooks/useMemberStore';

import useCommentStore from '../hooks/useCommentStore';

export default function DashBoardPage() {
  const postStore = usePostStore();

  const memberStore = useMemberStore();

  const commentStore = useCommentStore();

  useEffect(() => {
    postStore.fetchTodayPosts();
    memberStore.fetchTodaySignupNumber();
    commentStore.fetchTodayComment();
  }, []);

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
    />
  );
}
