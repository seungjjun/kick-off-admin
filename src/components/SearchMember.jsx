/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

const Container = styled.div`
    margin-block: 3em;
    width: 100%;
`;

const SearchBox = styled.div`
    display: flex;

    p {
        margin-right: 10em;
        font-weight: bold;
    }

    label {
        margin-right: .5em;
        align-self: center;
    }

    button {
        margin-left: 1em;
        padding: .5em 1em;
        border: none;
        border: 1px solid #D9D9D9;
        background-color: #FFF;
    }
`;

const Table = styled.table`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #CCC;
    margin-bottom: 1em;
    width: 100%;
`;

const Thead = styled.thead`
  display: flex;
  margin-top: 1em;
  height: 3em;
  background-color: #F5F5F5;
`;

const Tr = styled.tr`
  display: flex;
  width: 100%;
  align-self: center;
`;

const Value = styled.tr`
  display: flex;
  justify-content: space-between;
  margin-block: 1em;
  width: 100%;
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
  align-self: center;
  text-align: start;
  width: 55%;
`;

const Grade = styled.th`
    width: 10%;
`;

const GradeValue = styled.td`
  align-self: center;
  text-align: center;
  width: 10%;
`;

const PostNumber = styled.th`
  width: 15%;
`;

const PostNumberValue = styled.td`
  align-self: center;
  text-align: center;
  width: 15%;
`;

const CommentNumber = styled.th`
  width: 15%;
`;

const CommentNumberValue = styled.td`
  align-self: center;
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

export default function SearchMember({ user, members }) {
  const handleChangeMember = (member) => {
    members.setMember(member);
  };

  const handleClickSearch = () => {
    members.searchMember(members.member);
  };

  return (
    <Container>
      <SearchBox>
        <p>멤버 검색</p>
        <label htmlFor="input-memberId">아이디</label>
        <input
          id="input-memberId"
          type="text"
          value={members.member}
          onChange={(e) => handleChangeMember(e.target.value)}
        />
        <button type="button" onClick={handleClickSearch}>검색</button>
      </SearchBox>
      {Object.keys(user).length === 0 && !members.isSearchFail ? (
        null
      ) : members.isSearchFail ? (
        <p>{members.errorMessage}</p>
      ) : (
        <Table>
          <Thead>
            <Tr>
              <Image />
              <User>닉네임 (아이디)</User>
              <Grade>등급</Grade>
              <PostNumber>게시글 수</PostNumber>
              <CommentNumber>댓글 수</CommentNumber>
            </Tr>
          </Thead>
          <tbody>
            <Value>
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
              <GradeValue>
                {user.user.grade}
              </GradeValue>
              <PostNumberValue>
                {user.postNumber}
              </PostNumberValue>
              <CommentNumberValue>
                {user.commentNumber}
              </CommentNumberValue>
            </Value>
          </tbody>
        </Table>
      )}
    </Container>
  );
}
