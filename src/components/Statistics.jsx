/* eslint-disable react/prop-types */
import styled from 'styled-components';

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

const Rank = styled.th`
  width: 15%;
`;

const RankValue = styled.td`
  width: 15%;
  text-align: center;
`;

const PostTitle = styled.th`
  width: 30%;
`;

const PostTitleValue = styled.td`
  text-align: center;
  width: 30%;  
`;

const Author = styled.th`
  width: 20%;
  text-align: center;
`;

const AuthorValue = styled.td`
  text-align: center;
  width: 20%;
`;

const CreatedDate = styled.th`
  width: 15%;
`;

const CreatedDateValue = styled.td`
  text-align: center;
  width: 15%;
`;

const Hit = styled.th`
  width: 20%;
`;

const HitValue = styled.td`
  text-align: center;
  width: 20%;
`;

export default function Statistics({ mostHitPosts, users }) {
  if (Object.keys(mostHitPosts).length === 0) {
    return (
      <p>로딩중...</p>
    );
  }

  return (
    <Container>
      <Title>게시글 순위 (조회수)</Title>
      <Table>
        <Thead>
          <Tr>
            <Rank>순위</Rank>
            <PostTitle>글제목</PostTitle>
            <Author>작성자</Author>
            <CreatedDate>작성일</CreatedDate>
            <Hit>조회수</Hit>
          </Tr>
        </Thead>
        <tbody>
          {mostHitPosts.map((post, index) => (
            <Values key={post.id}>
              <RankValue>{index + 1}</RankValue>
              <PostTitleValue>{post.postInformation.title}</PostTitleValue>
              <AuthorValue>{users.find((user) => user.id === post.userId.userId).name}</AuthorValue>
              <CreatedDateValue>{post.createdAt}</CreatedDateValue>
              <HitValue>{post.hit}</HitValue>
            </Values>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
