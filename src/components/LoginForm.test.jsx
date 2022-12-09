import {
  cleanup,
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import LoginForm from './LoginForm';

const submit = jest.fn();

let isLoginFail = '';
let loginErrorMessge = '';

jest.mock('../hooks/useAdminStore', () => () => ({
  isLoginFail,
  loginErrorMessge,
}));

const context = describe;
describe('LoginForm', () => {
  beforeEach(() => {
    render(<LoginForm
      submit={submit}
    />);
  });

  context('when login success', () => {
    isLoginFail = false;

    it('submit function called', async () => {
      fireEvent.change(screen.getByPlaceholderText('아이디'), {
        target: { value: 'jel1y' },
      });

      fireEvent.change(screen.getByPlaceholderText('비밀번호'), {
        target: { value: 'Qwe1234!' },
      });

      fireEvent.click(screen.getByText('로그인'));

      await waitFor(() => {
        expect(submit).toBeCalled();
      });

      cleanup();
    });
  });

  context('when login fail', () => {
    isLoginFail = true;
    loginErrorMessge = '아이디 혹은 비밀번호가 맞지 않습니다.';

    it('submit function called', async () => {
      fireEvent.change(screen.getByPlaceholderText('아이디'), {
        target: { value: 'jel1y' },
      });

      fireEvent.change(screen.getByPlaceholderText('비밀번호'), {
        target: { value: 'Qwe1234!' },
      });

      fireEvent.click(screen.getByText('로그인'));

      screen.getByText('아이디 혹은 비밀번호가 맞지 않습니다.');

      cleanup();
    });
  });
});
