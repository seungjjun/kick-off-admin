import { Route, Routes } from 'react-router-dom';

import Menu from './components/Menu';

import DashBoardPage from './pages/DashBoardPage';
import MemberListPage from './pages/MemeberListPage';
import GradeBoardPage from './pages/GradeBoardPage';
import ManageBoardPage from './pages/ManageBoardPage';
import StatisticsPage from './pages/StatisticsPage';
import ChartPage from './pages/ChartPage';

export default function App() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<DashBoardPage />} />
        <Route path="manage-members" element={<MemberListPage />} />
        <Route path="manage-levelup" element={<GradeBoardPage />} />
        <Route path="manage-board" element={<ManageBoardPage />} />
        <Route path="statistics" element={<StatisticsPage />} />
        <Route path="/chart" element={<ChartPage />} />
      </Routes>
    </div>
  );
}
