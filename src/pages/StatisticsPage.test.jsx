import { render } from '@testing-library/react';

import StatisticsPage from './StatisticsPage';

const fetchMostHitPosts = jest.fn();

let mostHitPosts = [];
let users = [];

jest.mock('../hooks/usePostStore', () => () => ({
  fetchMostHitPosts,
  mostHitPosts,
  users,
}));

const context = describe;

describe('StatisticsPage', () => {
  beforeEach(() => {
    mostHitPosts = [
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

    users = [
      {
        id: 1,
        name: '짱구',
      },
    ];

    render(<StatisticsPage />);
  });

  context('게시글 통계 순위를 확인할 때', () => {
    it('조회수가 높은 게시글을 불러오는 함수가 실행되는 것을 확인할 수 있다.', () => {
      expect(fetchMostHitPosts).toBeCalled();
    });
  });
});
