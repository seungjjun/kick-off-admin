import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100px;
  min-width: 1072px;
  background-color: #CD2C2C;
`;

const Content = styled.nav`
  display: flex;
  width: 100%;
`;

const MenuList = styled.ul`
  display: flex;
  margin: auto;
  min-width: 1072px;
`;

const Item = styled.li`
  display: flex;
  width: 100%;
  justify-content: space-around;
 
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FFF;

    div {
      margin-bottom: 0.4em;
    }
  }
`;

const HomeIcon = styled.div`
  width: 3em;
  height: 3em;
  background: url("https://user-images.githubusercontent.com/104769120/206433181-109f8eb5-b2a1-4c6a-a3e0-47124824f5c7.png");
  background-size: cover;
`;

const MemberIcon = styled.div`
  width: 3.3em;
  height: 3em;
  background: url("https://user-images.githubusercontent.com/104769120/206444163-2c1d2ef1-5d7b-494e-b0c0-3fae03479cc0.png");
  background-size: cover;
`;

const GradeIcon = styled.div`
  width: 3em;
  height: 3em;
  background: url("https://user-images.githubusercontent.com/104769120/206434212-21cb5f71-6c29-44e2-8698-40bc82f72da8.png");
  background-size: cover;
`;

const BoardIcon = styled.div`
  width: 3em;
  height: 3em;
  background: url("https://user-images.githubusercontent.com/104769120/206435495-bdd984c8-4579-44bd-bda7-541eb6526720.png");
  background-size: cover;
`;

const StatisticsIcon = styled.div`
  width: 3em;
  height: 3em;
  background: url("https://user-images.githubusercontent.com/104769120/206435697-2b152fc1-5a63-41da-bd90-a67e1ded35d6.png");
  background-size: cover;
`;

export default function Menu() {
  return (
    <Container>
      <Content>
        <MenuList>
          <Item>
            <div>
              <Link to="/dashboard">
                <HomeIcon />
                홈 화면
              </Link>
            </div>
            <div>
              <Link to="/manage-members">
                <MemberIcon />
                멤버 관리
              </Link>
            </div>
            <div>
              <Link to="/manage-levelup">
                <GradeIcon />
                등업 신청 관리
              </Link>
            </div>
            <div>
              <Link to="/manage-board">
                <BoardIcon />
                게시판 관리
              </Link>
            </div>
            <div>
              <Link to="/statistics">
                <StatisticsIcon />
                통계
              </Link>
            </div>
          </Item>
        </MenuList>
      </Content>
    </Container>
  );
}
