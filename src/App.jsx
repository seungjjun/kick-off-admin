import { Route, Routes } from 'react-router-dom';

import Menu from './components/Menu';

import HomePage from './pages/HomePage';
import MemberListPage from './pages/MemeberListPage';
import GradeBoardPage from './pages/GradeBoardPage';
import ManageBoardPage from './pages/ManageBoardPage';

export default function App() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="manage-members" element={<MemberListPage />} />
        <Route path="manage-levelup" element={<GradeBoardPage />} />
        <Route path="manage-board" element={<ManageBoardPage />} />
      </Routes>
    </div>
  );
}
