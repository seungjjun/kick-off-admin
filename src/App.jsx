import { Route, Routes } from 'react-router-dom';

import { Reset } from 'styled-reset';

import styled from 'styled-components';
import Menu from './components/Menu';

import DashBoardPage from './pages/DashBoardPage';
import MemberListPage from './pages/MemeberListPage';
import GradeBoardPage from './pages/GradeBoardPage';
import ManageBoardPage from './pages/ManageBoardPage';
import StatisticsPage from './pages/StatisticsPage';
import ChartPage from './pages/ChartPage';
import GlobalStyle from './styles/GlobalStyle';

const Container = styled.div`
  margin: 0 auto;
  min-height: 100vh;
`;

const Body = styled.div`
  display: flex;
  height: 100vh;
`;

const MenuList = styled.div`
  display: inline-block;
  height: 100%;
  width: 23%;
  background-color: #DAEAF1;
`;

const Content = styled.div`
  display: inline-flex;
  height: 100%;
  width: 77%;
`;

export default function App() {
  return (
    <Container>
      <Reset />
      <GlobalStyle />
      <Body>
        <MenuList>
          <Menu />
        </MenuList>
        <Content>
          <Routes>
            <Route path="/" element={<DashBoardPage />} />
            <Route path="manage-members" element={<MemberListPage />} />
            <Route path="manage-levelup" element={<GradeBoardPage />} />
            <Route path="manage-board" element={<ManageBoardPage />} />
            <Route path="statistics" element={<StatisticsPage />} />
            <Route path="/chart" element={<ChartPage />} />
          </Routes>
        </Content>
      </Body>
    </Container>
  );
}
