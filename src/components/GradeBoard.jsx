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

  td {
    text-align: center;
  }
`;

const Applicant = styled.th`
  width: 15%;
`;

const ApplicantValue = styled.td`
  width: 15%;
`;

const ApplicationGrade = styled.th`
  width: 10%;
`;

const ApplicationGradeValue = styled.td`
  width: 10%;
`;

const CurrentGrade = styled.th`
  width: 10%;
`;

const CurrentGradeValue = styled.td`
  width: 10%;
`;

const PostNumber = styled.th`
  width: 10%;
`;

const PostNumberValue = styled.td`
  width: 10%;
`;

const CommentNumber = styled.th`
  width: 10%;
`;

const CommentNumberValue = styled.td`
  width: 10%;
`;

const Reason = styled.th`
  width: 30%;
`;

const ReasonValue = styled.td`
  width: 30%;
`;

const Button = styled.th`
  width: 15%;
`;

const ButtonValue = styled.td`
  width: 15%;

  button {
    padding: .4em 1em;
    border: 1px solid #CCC;
    margin-left: .5em;
    background-color: #FFF;
    cursor: pointer;
  }
`;

export default function GradeBoard({ applicationPosts, acceptance, refusal }) {
  const handleClickAcceptance = (postId, applicationGrade, name) => {
    acceptance(postId, applicationGrade, name);
  };

  const handleClickRefusal = (postId) => {
    refusal(postId);
  };

  return (
    <Container>
      <Title>등업 신청 관리</Title>
      <Table>
        <Thead>
          <Tr>
            <Applicant>신청자</Applicant>
            <ApplicationGrade>신청등급</ApplicationGrade>
            <CurrentGrade>현재등급</CurrentGrade>
            <PostNumber>게시글수</PostNumber>
            <CommentNumber>댓글 수</CommentNumber>
            <Reason>신청사유</Reason>
            <Button />
          </Tr>
        </Thead>
        <tbody>
          {applicationPosts.filter((post) => post.state === 'processing').map((post) => (
            <Values key={post.id}>
              <ApplicantValue>{post.applicant.name}</ApplicantValue>
              <ApplicationGradeValue>{post.applicant.applicationGrade}</ApplicationGradeValue>
              <CurrentGradeValue>{post.applicant.currentGrade}</CurrentGradeValue>
              <PostNumberValue>{post.creationNumber.postNumber}</PostNumberValue>
              <CommentNumberValue>{post.creationNumber.commentNumber}</CommentNumberValue>
              <ReasonValue>{post.reason}</ReasonValue>
              <ButtonValue>
                <button
                  type="button"
                  onClick={() => handleClickAcceptance(
                    post.id,
                    post.applicant.applicationGrade,
                    post.applicant.name,
                  )}
                >
                  수락
                </button>
                <button
                  type="button"
                  onClick={() => handleClickRefusal(post.id)}
                >
                  거절
                </button>
              </ButtonValue>
            </Values>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
