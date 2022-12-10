import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import Menu from './Menu';

describe('Menu', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Menu />
      </MemoryRouter>,
    );
  });

  it('메뉴 항목을 확인할 수 있다', () => {
    screen.getByText('홈 화면');
    screen.getByText('멤버 관리');
    screen.getByText('등업 신청 관리');
    screen.getByText('게시판 관리');
    screen.getByText('통계');
  });
});
