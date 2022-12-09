import { render, screen } from '@testing-library/react';

import LoginFormPage from './LoginFormPage';

const navigate = jest.fn();

const login = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
}));

jest.mock('../hooks/useMemberStore', () => () => ({
  login,
}));

describe('LoginFormPage', () => {
  beforeEach(() => {
    render(<LoginFormPage />);
  });

  it('render login form page', () => {
    screen.getByPlaceholderText('아이디');
    screen.getByPlaceholderText('비밀번호');
    screen.getByText('로그인');
  });
});
