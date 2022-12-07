import { render, screen } from '@testing-library/react';

import DashBoard from './DashBoard';

const context = describe;

describe('DashBoard', () => {
  beforeEach(() => {
    const statistics = {
      todayCreatedPostsNumber: 5,
      todaySignupUserNumber: 2,
      todayWrittenCommentsNumber: 12,
    };

    render(<DashBoard
      statistics={statistics}
    />);
  });

  context('게시글 통계자료를 확인할 때', () => {
    it('오늘 작성된 게시글 수를 확인할 수 있다.', () => {
      screen.getByText('오늘 작성 게시글 수 5');
    });

    it('오늘 작성된 댓글 수를 확인할 수 있다.', () => {
      screen.getByText('오늘 작성 댓글 수 12');
    });

    it('오늘 가입한 멤버의 수를 확인할 수 있다.', () => {
      screen.getByText('오늘 가입 멤버 수 2');
    });
  });
});
