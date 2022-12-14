/* eslint-disable react/prop-types */
import styled from 'styled-components';

import useAdminStore from '../hooks/useAdminStore';

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

  h2 {
    font-size: 1.2em;
    font-weight: bold;
    margin: 1em 0 1em 1em;
  }
`;

const TodayStatistics = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
  grid-template-areas:
  "members comments"
  "posts posts";
  gap: 1em;
  grid-area: todayStatistics;
`;

const Member = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
  grid-template-areas:
  "myInformation members"
  "posts grade"; 
  gap: 1em;
  grid-area: member;
`;

const MyInformation = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  border: 1px solid #CCC;
  grid-area: myInformation;

  div:nth-child(3) {
    margin-left: 12em;
  }
`;

const ProfileImageBox = styled.div`
  margin-top: 0.5em;
  margin-left: 1em;
  width: 85%;
  height: 60%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
`;

const Information = styled.div`
  margin-top: 1em;
  margin-left: 1em;

  p:nth-child(2) {
    margin-top: 0.4em;
    color: #CCC;
  }
`;

const LogoutIcon = styled.div`
  width: 2em;
  height: 2em;
  border: none;
  background: url('https://user-images.githubusercontent.com/104769120/206602188-0a45c804-226e-423e-8fdd-358a72b314c6.png');
  background-size: cover;
  cursor: pointer; 
`;

const BoardPieChart = styled.div`
  border: 1px solid #CCC;
  border-radius: 20px;
  grid-area: pieChart;
  h2 {
    margin-left: 1em;
  }
`;

const Posts = styled.div`
  padding: 1em;
  border: 1px solid #CCC;
  border-radius: 20px;
  grid-area: posts;
`;

const Members = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  padding-left: 2em;
  border: 1px solid #CCC;
  border-radius: 20px;
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
  border: 1px solid #CCC;
  border-radius: 20px;
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
  border: 1px solid #CCC;
  border-radius: 20px;
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
  padding: 1em;
  border: 1px solid #CCC;
  border-radius: 20px;
  grid-area: comments;
`;

const TodayMembers = styled.div`
  padding: 1em;
  border: 1px solid #CCC;
  border-radius: 20px;
  grid-area: members;
`;

const BoardLineChart = styled.div`
  border: 1px solid #CCC;
  border-radius: 20px;
  grid-area: lineChart;  
`;

export default function DashBoard({
  statistics, boardRate, navigate, setAccessToken,
}) {
  const handleClickLogout = () => {
    setAccessToken('');
    navigate('/');
  };

  const adminStroe = useAdminStore();

  const postStore = usePostStore();

  const gradeStore = useGradeStore();

  const memberStore = useMemberStore();

  const { admin } = adminStroe;

  return (
    <Container>
      <Member>
        <MyInformation>
          <ProfileImageBox>
            <img src={admin.profileImage} alt="profileImage" />
          </ProfileImageBox>
          <Information>
            <p>
              {admin.name}
              ???
            </p>
            <p>{admin.identification}</p>
          </Information>
          <LogoutIcon
            data-testid="logout"
            onClick={handleClickLogout}
          />
        </MyInformation>
        <Members>
          <MemberIcon />
          <div>
            <p>?????? ?????? ???</p>
            <p>
              {memberStore.usersNumber}
              ???
            </p>
          </div>
        </Members>
        <Grade>
          <GradeIcon />
          <div>
            <p>?????? ?????? ????????? ???</p>
            <p>
              {gradeStore.processingApplications}
              ???
            </p>
          </div>
        </Grade>
        <TotalPosts>
          <PostIcon />
          <div>
            <p>?????? ????????? ???</p>
            <p>
              {postStore.totalPostNumber}
              ???
            </p>
          </div>
        </TotalPosts>
      </Member>
      <TodayStatistics>
        <Posts>
          <p>
            ?????? ?????? ????????? ???
            {' '}
            {statistics.todayCreatedPostsNumber}
          </p>
        </Posts>
        <Comments>
          <p>
            ?????? ?????? ?????? ???
            {' '}
            {statistics.todayWrittenCommentsNumber}
          </p>
        </Comments>
        <TodayMembers>
          <p>
            ?????? ?????? ?????? ???
            {' '}
            {statistics.todaySignupUserNumber}
          </p>
        </TodayMembers>
      </TodayStatistics>
      <BoardPieChart>
        <h2>???????????? ????????? ??????</h2>
        <PieBoardChart
          boardRate={boardRate}
        />
      </BoardPieChart>
      <BoardLineChart>
        <h2>????????? ?????? ??????</h2>
        <ChartPage />
      </BoardLineChart>
    </Container>
  );
}
