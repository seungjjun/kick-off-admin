/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import styled from 'styled-components';

const Container = styled.div`
    /* display: flex;
    flex-direction: column; */
`;

const Table = styled.table`
    /* display: flex;
    flex-direction: column; */
    padding-bottom: 1.2em;
    border-bottom: 1px solid #CCC;
`;

const User = styled.th`
`;

const UserValue = styled.tr`
`;

const Grade = styled.th`
    
`;

const PostNumber = styled.th`
`;

const PostNumberValue = styled.tr`
`;

const CommentNumber = styled.th`
`;

const BasicProfileImage = styled.div`
  width: 50px;
  height: 50px;
  background: url('https://user-images.githubusercontent.com/104769120/203972344-e8de6516-2d57-4afd-b1ef-63a7471f3e5a.png');
  background-size: cover;
  border-radius: 50%;
`;

const ProfileImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

export default function MemberList({
  totalMembers, selectUser, changeGrade, userAllCheck,
}) {
  const handleChangeCheck = (checked, userId) => {
    selectUser.isChecked(checked, userId);
  };

  const handleClickGrade = () => {
    changeGrade(selectUser.checkUsers);
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
      <h2>전체 멤버 관리</h2>
      <div>
        <label htmlFor="input-memberId">멤버 검색</label>
        <input
          id="input-memberId"
          type="text"
        />
        <button type="button">검색</button>
      </div>
      <div>
        <p>카페 멤버 수</p>
        <Table>
          <thead>
            <tr>
              <th>선택</th>
              <th />
              <User>닉네임 (아이디)</User>
              <Grade>등급</Grade>
              <PostNumber>게시글 수</PostNumber>
              <CommentNumber>댓글 수</CommentNumber>
            </tr>
          </thead>
          <tbody>
            {totalMembers.map((user) => (
              <UserValue key={user.user.id}>
                <td>
                  <input
                    type="checkbox"
                    onChange={(e) => handleChangeCheck(e.target.checked, user.user.id)}
                    checked={selectUser.checkUsers.indexOf(user.user.id) >= 0}
                  />
                </td>
                <td>
                  {user.user.profileImage === null ? (
                    <BasicProfileImage />
                  ) : (
                    <ProfileImage src={`${user.user.profileImage}`} alt="profileImage" />
                  )}
                </td>
                <td>
                  {user.user.name}
                  (
                  {user.user.identification}
                  )
                </td>
                <td>{user.user.grade}</td>
                <td>{user.postNumber}</td>
                <td>{user.commentNumber}</td>
              </UserValue>
            ))}
          </tbody>
        </Table>
        <div>
          <label htmlFor="check-user">전체선택</label>
          <input
            id="check-user"
            type="checkbox"
            onChange={(e) => handleChangeAllCheck(e.target.checked)}
          />
          <span>선택 멤버를</span>
          <select
            id="select-grade"
            onChange={handleChangeGrade}
          >
            <option value="">등급을 선택해주세요</option>
            <option value="세미프로">세미프로</option>
            <option value="프로">프로</option>
            <option value="월드클래스">월드클래스</option>
            <option value="스탭">스탭</option>
          </select>
          <span>(으)로</span>
          <button type="button" onClick={handleClickGrade}>변경</button>
          <button type="button">강제 탈퇴</button>
        </div>
      </div>
    </Container>
  );
}
