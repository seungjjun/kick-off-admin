import { render, screen } from '@testing-library/react';

import Statistics from './Statistics';

const context = describe;

describe('StatisticsPgge', () => {
  beforeEach(() => {
    const mostHitPosts = [
      {
        id: 1,
        postInformation: {
          title: '대한민국 16강 진출',
        },
        createdAt: '2022-12-07',
        hit: 4700,
        userId: 1,
      },
    ];

    const users = [
      {
        id: 1,
        name: '짱구',
      },
    ];
    render(<Statistics
      mostHitPosts={mostHitPosts}
      users={users}
    />);
  });

  context('게시글 통계 순위를 확인할 때', () => {
    it('통계 테이블을 확인할 수 있다.', () => {
      screen.getByText('게시글 순위 (조회수)');
      screen.getByText('순위');
      screen.getByText('글제목');
      screen.getByText('작성자');
      screen.getByText('작성일');
      screen.getByText('조회수');
    });

    it('가장 많이 본 게시글을 확인할 수 있다.', () => {
      screen.getByText('1');
      screen.getByText('대한민국 16강 진출');
      screen.getByText('짱구');
      screen.getByText('2022-12-07');
      screen.getByText(4700);
    });
  });
});
