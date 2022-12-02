import { useEffect, useState } from 'react';

import useMemberStore from '../hooks/useMemberStore';

import MemberList from '../components/MemberList';

export default function MemberListPage() {
  const [checkUsers, setCheckUsers] = useState([]);
  const [grade, setGrade] = useState('');

  const memberStore = useMemberStore();

  useEffect(() => {
    const fetchMember = async () => {
      await memberStore.fetchUsers();
      memberStore.makeUserArray();
    };

    fetchMember();
  }, []);

  const { totalMembers } = memberStore;

  const isChecked = (checked, userId) => {
    if (checked) {
      setCheckUsers([...checkUsers, userId]);
    }

    if (!checked) {
      setCheckUsers(checkUsers.filter((checkedUserId) => checkedUserId !== userId));
    }
  };

  const changeGrade = async (checkedUserId) => {
    if (grade === '') {
      alert('등급을 선택해주세요');
      return;
    }

    await memberStore.changeGrade(checkedUserId, grade);

    await memberStore.fetchUsers();
    memberStore.makeUserArray();

    setCheckUsers([]);
  };

  const userAllCheck = (checked) => {
    if (checked) {
      const userIds = [];
      totalMembers.map((user) => userIds.push(user.user.id));
      setCheckUsers(userIds);
    }

    if (!checked) {
      setCheckUsers([]);
    }
  };

  const selectUser = {
    checkUsers,
    setCheckUsers,
    isChecked,
    grade,
    setGrade,
  };

  return (
    <MemberList
      totalMembers={totalMembers}
      selectUser={selectUser}
      changeGrade={changeGrade}
      userAllCheck={userAllCheck}
    />
  );
}
