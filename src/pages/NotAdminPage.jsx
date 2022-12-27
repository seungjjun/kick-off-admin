import { useNavigate } from 'react-router-dom';

import NotAdmin from '../components/NotAdmin';

export default function NotAdminPage() {
  const navigate = useNavigate();

  return (
    <NotAdmin
      navigate={navigate}
    />
  );
}
