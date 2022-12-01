import { useEffect } from 'react';

import GradeBoard from '../components/GradeBoard';

import useGradeStore from '../hooks/useGradeStore';

export default function GradeBoardPage() {
  const gradeStore = useGradeStore();

  useEffect(() => {
    gradeStore.fetchApplication();
  }, []);

  const acceptance = async (postId, applicationGrade, name) => {
    await gradeStore.updateGrade(postId, applicationGrade, name);

    gradeStore.fetchApplication();
  };

  const refusal = async (postId) => {
    await gradeStore.refuseUpdate(postId);
    gradeStore.fetchApplication();
  };

  return (
    <GradeBoard
      applicationPosts={gradeStore.applicationPosts}
      acceptance={acceptance}
      refusal={refusal}
    />
  );
}
