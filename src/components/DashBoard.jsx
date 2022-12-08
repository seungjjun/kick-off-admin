/* eslint-disable react/prop-types */
import styled from 'styled-components';

import ChartPage from '../pages/ChartPage';

import PieBoardChart from './PieBoardChart';

const Container = styled.div`
  display: grid;
  width: 100%;
  padding: 1em;
  gap: 1em;
  grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
  "myInformation todayStatistics"
  ". ."
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
  "posts comments"
  "members .";
  grid-area: todayStatistics;
  background-color: #FFF;
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

const Comments = styled.div`
  border: 1px solid #CCC;
  grid-area: comments;
`;

const Members = styled.div`
  border: 1px solid #CCC;
  grid-area: members;
`;

const BoardLineChart = styled.div`
  grid-area: lineChart;
  background-color: #FFF;
  
`;

export default function DashBoard({ statistics, boardRate }) {
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
        <Members>
          <p>
            오늘 가입 멤버 수
            {' '}
            {statistics.todaySignupUserNumber}
          </p>
        </Members>
      </TodayStatistics>
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
