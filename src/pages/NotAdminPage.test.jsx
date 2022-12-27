import { render } from '@testing-library/react';

import NotAdminPage from './NotAdminPage';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
}));

test('NotAdminPage', () => {
  render(<NotAdminPage />);
});
