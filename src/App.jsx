/* eslint-disable no-nested-ternary */
import { Route, Routes } from 'react-router-dom';

import { Reset } from 'styled-reset';

import styled from 'styled-components';

import { useEffect } from 'react';

import { useLocalStorage } from 'usehooks-ts';

import { adminApiService } from './services/AdminApiService';

import { postApiService } from './services/PostApiService';

import Menu from './components/Menu';

import DashBoardPage from './pages/DashBoardPage';
import MemberListPage from './pages/MemeberListPage';
import GradeBoardPage from './pages/GradeBoardPage';
import ManageBoardPage from './pages/ManageBoardPage';
import StatisticsPage from './pages/StatisticsPage';
import ChartPage from './pages/ChartPage';
import GlobalStyle from './styles/GlobalStyle';
import LoginFormPage from './pages/LoginFormPage';
import useAdminStore from './hooks/useAdminStore';
import NotAdminPage from './pages/NotAdminPage';
import Register from './components/Register';

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
  const [accessToken] = useLocalStorage('accessToken', '');

  const adminStroe = useAdminStore();

  useEffect(() => {
    if (accessToken) {
      adminApiService.setAccessToken(accessToken);
      postApiService.setAccessToken(accessToken);

      adminStroe.fetchAdmin();
    }
  }, [accessToken]);

  return (
    <Container>
      <Reset />
      <GlobalStyle />
      {adminStroe.isAdmin ? (
        <NotAdminPage />
      ) : accessToken && !adminStroe.isAdmin ? (
        <>
          <Menu />
          <Content>
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<LoginFormPage />} />
              <Route path="dashboard" element={<DashBoardPage />} />
              <Route path="manage-members" element={<MemberListPage />} />
              <Route path="manage-levelup" element={<GradeBoardPage />} />
              <Route path="manage-board" element={<ManageBoardPage />} />
              <Route path="statistics" element={<StatisticsPage />} />
              <Route path="chart" element={<ChartPage />} />
            </Routes>
          </Content>
        </>
      ) : (
        <LoginFormPage />
      )}
    </Container>
  );
}
