/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import styled from 'styled-components';
import useMemberStore from '../hooks/useMemberStore';

import SearchMember from './SearchMember';

const Container = styled.div`
  width: 100%;
  margin-top: 5em;
`;

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: bold;
  padding-bottom: .5em;
  border-bottom: 1px solid #CCC;
`;

const Table = styled.table`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  width: 100%;
  border-bottom: 1px solid #CCC;

  td {
    align-self: center;
  }

  th {
    align-self: center;
  }
`;

const Thead = styled.thead`
  display: flex;
  height: 3em;
  background-color: #F5F5F5;
`;

const Tr = styled.tr`
  display: flex;
  width: 100%;
`;

const Values = styled.tr`
  display: flex;
  justify-content: space-between;
  margin-block: 1em;
  width: 100%;
`;

const CheckBox = styled.th`
  width: 5%;
`;

const CheckBoxValue = styled.td`
  width: 5%;
  text-align: center;
`;

const Image = styled.th`
  width: 10%;
`;

const ImageValue = styled.td`
  text-align: end;
  margin-right: 1em;
  width: 10%;  
`;

const User = styled.th`
  width: 55%;
  text-align: start;
`;

const UserValue = styled.td`
  align-items: center;
  text-align: start;
  width: 55%;
`;

const Grade = styled.th`
  width: 10%;
`;

const GradeValue = styled.td`
  align-items: center;
  text-align: center;
  width: 10%;
`;

const PostNumber = styled.th`
  width: 15%;
`;

const PostNumberValue = styled.td`
  align-items: center;
  text-align: center;
  width: 15%;
`;

const CommentNumber = styled.th`
  width: 15%;
`;

const CommentNumberValue = styled.td`
  align-items: center;
  text-align: center;
  width: 15%;
`;

const BasicProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%; 
`;

const SelectMember = styled.div`
  label {
    margin-right: .5em;
  }

  span {
    margin: 0 .3em;
  }

  button {
    padding: .3em 1em;
    margin: 0 .4em;
    border: 1px solid #CCC;
    background-color: #FFF;
  }
`;

const GradeSelect = styled.select`
  margin: 0 .4em;
  padding: .2em .4em;
  border: 1px solid #CCC;
`;

export default function MemberList({
  totalMembers, selectUser, changeGrade, userAllCheck, members, user, removeUser,
}) {
  const memberStore = useMemberStore();

  const handleChangeCheck = (checked, userId) => {
    selectUser.isChecked(checked, userId);
  };

  const handleClickGrade = () => {
    changeGrade(selectUser.checkUsers);
  };

  const handleClickRemove = () => {
    removeUser();
  };

  const handleChangeGrade = (target) => {
    selectUser.setGrade(target.target.value);
  };

  const handleChangeAllCheck = (checked) => {
    userAllCheck(checked);
  };

  if (totalMembers.length === 0) {
    return (
      <p>로딩중...</p>
    );
  }

  return (
    <Container>
      <Title>전체 멤버 관리</Title>
      <SearchMember
        user={user}
        members={members}
      />
      <div>
        <p>
          카페 멤버 수
          {' '}
          {totalMembers.length}
        </p>
        <Table>
          <Thead>
            <Tr>
              <CheckBox>선택</CheckBox>
              <Image />
              <User>닉네임 (아이디)</User>
              <Grade>등급</Grade>
              <PostNumber>게시글 수</PostNumber>
              <CommentNumber>댓글 수</CommentNumber>
            </Tr>
          </Thead>
          <tbody>
            {totalMembers.map((user) => (
              <Values key={user.user.id}>
                <CheckBoxValue>
                  <input
                    id="check-user"
                    type="checkbox"
                    onChange={(e) => handleChangeCheck(e.target.checked, user.user.id)}
                    checked={selectUser.checkUsers.indexOf(user.user.id) >= 0}
                  />
                </CheckBoxValue>
                <ImageValue>
                  {user.user.profileImage === null ? (
                    <BasicProfileImage src="https://user-images.githubusercontent.com/104769120/203972344-e8de6516-2d57-4afd-b1ef-63a7471f3e5a.png" alt="profileImage" />
                  ) : (
                    <ProfileImage src={`${user.user.profileImage}`} alt="profileImage" />
                  )}
                </ImageValue>
                <UserValue>
                  {user.user.name}
                  (
                  {user.user.identification}
                  )
                </UserValue>
                <GradeValue>{user.user.grade}</GradeValue>
                <PostNumberValue>{user.postNumber}</PostNumberValue>
                <CommentNumberValue>{user.commentNumber}</CommentNumberValue>
              </Values>
            ))}
          </tbody>
        </Table>
        <SelectMember>
          <label htmlFor="check-user">전체 선택</label>
          <input
            id="check-users"
            type="checkbox"
            onChange={(e) => handleChangeAllCheck(e.target.checked)}
          />
          <span>선택 멤버를</span>
          <GradeSelect
            id="select-grade"
            onChange={handleChangeGrade}
          >
            <option value="">등급을 선택해주세요</option>
            <option value="세미프로">세미프로</option>
            <option value="프로">프로</option>
            <option value="월드클래스">월드클래스</option>
            <option value="스탭">스탭</option>
          </GradeSelect>
          <span>(으)로</span>
          <button type="button" onClick={handleClickGrade}>변경</button>
          <button type="button" onClick={handleClickRemove}>강제 탈퇴</button>
          {memberStore.isRemoveSuccess ? (
            <p>{memberStore.successMessage}</p>
          ) : (
            null
          )}
        </SelectMember>
      </div>
    </Container>
  );
}
