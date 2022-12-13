import { useEffect, useState } from 'react';

import useMemberStore from '../hooks/useMemberStore';

import MemberList from '../components/MemberList';

export default function MemberListPage() {
  const [checkUsers, setCheckUsers] = useState([]);
  const [grade, setGrade] = useState('');
  const [member, setMember] = useState('');

  const memberStore = useMemberStore();

  const { totalMembers } = memberStore;

  useEffect(() => {
    const fetchMember = async () => {
      await memberStore.fetchUsers();
      memberStore.makeUserArray();

      memberStore.reset();
    };

    fetchMember();
  }, []);

  const searchMember = async (member) => {
    await memberStore.searchMember(member);

    setMember('');
  };

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

  const removeUser = async () => {
    await memberStore.removeUser(checkUsers);

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

  const members = {
    member,
    setMember,
    searchMember,
    errorMessage: memberStore.errorMessage,
    isSearchFail: memberStore.isSearchFail,
  };

  return (
    <MemberList
      totalMembers={totalMembers}
      selectUser={selectUser}
      changeGrade={changeGrade}
      userAllCheck={userAllCheck}
      members={members}
      user={memberStore.user}
      removeUser={removeUser}
    />
  );
}
