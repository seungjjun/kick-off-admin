/* eslint-disable react/prop-types */
import styled from 'styled-components';
import useGradeStore from '../hooks/useGradeStore';
import useMemberStore from '../hooks/useMemberStore';
import usePostStore from '../hooks/usePostStore';

import ChartPage from '../pages/ChartPage';

import PieBoardChart from './PieBoardChart';

const Container = styled.div`
  display: grid;
  width: 100%;
  padding: 1em;
  gap: 1em;
  grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
  grid-template-areas:
  "member todayStatistics"
  "lineChart pieChart";
  background-color: #F9F2ED;

  h2 {
    font-size: 1.2em;
    font-weight: bold;
    margin: 1em 0 1em 1em;
  }
`;

const MyInformation = styled.div`
  grid-area: myInformation;
  background-color: #FFF;
`;

const TodayStatistics = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
  grid-template-areas:
  "members comments"
  "posts posts";
  gap: 1em;
  background-color: #FFF;
  grid-area: todayStatistics;
`;

const Member = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
  grid-template-areas:
  "members grade"
  "posts posts";
  gap: 1em;
  background-color: #F9F2ED;
  grid-area: member;
`;

const BoardPieChart = styled.div`
  grid-area: pieChart;
  background-color: #FFF;
  h2 {
    margin-left: 1em;
  }
`;

const Posts = styled.div`
  border: 1px solid #CCC;
  grid-area: posts;
`;

const Members = styled.div`
  display: flex;
  border-radius: 20px;
  padding-left: 2em;
  text-align: center;
  align-items: center;
  background-color: #FFF;
  grid-area: members;

  div:nth-child(2) {
    margin-left: 2em;
  }
`;

const Grade = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  padding-left: 1.4em;
  border-radius: 20px;
  background-color: #FFF;
  grid-area: grade;

  div:nth-child(2) {
    margin-left: 2em;
  }
`;

const TotalPosts = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  padding-left: 2.2em;
  border-radius: 20px;
  background-color: #FFF;
  grid-area: posts;

  div:nth-child(2) {
    margin-left: 2em;
  }
`;

const MemberIcon = styled.div`
  width: 3em;
  height: 3em;
  background: url("https://user-images.githubusercontent.com/104769120/206388367-71a42f25-14e6-4c23-8b38-9cec769d82d9.png");
  background-size: cover;
`;

const PostIcon = styled.div`
  width: 3em;
  height: 3em;
  background: url("https://user-images.githubusercontent.com/104769120/206385522-ae016b0e-153d-40e8-9b61-42053c0bf6da.png");
  background-size: cover;
`;

const GradeIcon = styled.div`
  width: 3em;
  height: 3em;
  background: url("https://user-images.githubusercontent.com/104769120/206390635-91b74a6e-d44b-4e17-8ebe-b048315b32ac.png");
  background-size: cover;
`;

const Comments = styled.div`
  border: 1px solid #CCC;
  grid-area: comments;
`;

const TodayMembers = styled.div`
  border: 1px solid #CCC;
  grid-area: members;
`;

const BoardLineChart = styled.div`
  grid-area: lineChart;
  background-color: #FFF;
  
`;

export default function DashBoard({ statistics, boardRate }) {
  const postStore = usePostStore();

  const gradeStore = useGradeStore();

  const memberStore = useMemberStore();

  return (
    <Container>
      <MyInformation />
      <TodayStatistics>
        <Posts>
          <p>
            오늘 작성 게시글 수
            {' '}
            {statistics.todayCreatedPostsNumber}
          </p>
        </Posts>
        <Comments>
          <p>
            오늘 작성 댓글 수
            {' '}
            {statistics.todayWrittenCommentsNumber}
          </p>
        </Comments>
        <TodayMembers>
          <p>
            오늘 가입 멤버 수
            {' '}
            {statistics.todaySignupUserNumber}
          </p>
        </TodayMembers>
      </TodayStatistics>
      <Member>
        <Members>
          <MemberIcon />
          <div>
            <p>전체 멤버 수</p>
            <p>
              {memberStore.usersNumber}
              명
            </p>
          </div>
        </Members>
        <Grade>
          <GradeIcon />
          <div>
            <p>등업 승인 대기자 수</p>
            <p>
              {gradeStore.processingApplications}
              명
            </p>
          </div>
        </Grade>
        <TotalPosts>
          <PostIcon />
          <div>
            <p>전체 게시글 수</p>
            <p>
              {postStore.totalPostNumber}
              개
            </p>
          </div>
        </TotalPosts>
      </Member>
      <BoardPieChart>
        <h2>게시판별 게시글 비중</h2>
        <PieBoardChart
          boardRate={boardRate}
        />
      </BoardPieChart>
      <BoardLineChart>
        <h2>게시글 댓글 현황</h2>
        <ChartPage />
      </BoardLineChart>
    </Container>
  );
}
