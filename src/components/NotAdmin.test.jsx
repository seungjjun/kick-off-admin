import { fireEvent, render, screen } from '@testing-library/react';

import NotAdmin from './NotAdmin';

const navigate = jest.fn();

const setAdminState = jest.fn();

jest.mock('../hooks/useAdminStore', () => () => ({
  setAdminState,
}));

const context = describe;

describe('NotAdmin', () => {
  beforeEach(() => {
    render(<NotAdmin
      navigate={navigate}
    />);
  });

  context('등록된 관리자 계정이 아닐 때', () => {
    it('관리자 계정이 아니라는 문구를 확인할 수 있다.', () => {
      screen.getByText('관리자 계정이 아닙니다.');
      screen.getByText('뒤로가기');
    });
  });

  context('뒤로가기 버턴을 클릭했을 때', () => {
    it('로그인 화면으로 이동한다.', () => {
      fireEvent.click(screen.getByText('뒤로가기'));

      expect(navigate).toBeCalledWith('/');
      expect(setAdminState).toBeCalled();
    });
  });
});
