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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1080px;
  min-width: 1072px;
`;

export default function App() {
  return (
    <Container>
      <Reset />
      <GlobalStyle />
      <Menu />
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
    </Container>
  );
}
