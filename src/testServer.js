/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import config from './config';

const baseUrl = config.apiBaseUrl;

const server = setupServer(
  rest.get(`${baseUrl}/admin-posts`, (req, res, ctx) => res(ctx.json({
    applicationPosts: [
      {
        id: 682,
        reason: '테스트',
        applicant: { name: '김민재', currentGrade: '아마추어', applicationGrade: '세미프로' },
        creationNumber: { postNumber: 1, commentNumber: 4 },
      },
    ],
  }))),

  rest.get(`${baseUrl}/admin-users`, (req, res, ctx) => res(ctx.json({
    members: [
      {
        users: {
          grade: '세미프로',
          id: 1,
          identification: 'jel1y',
          isMyToken: false,
          name: '훈이',
          profileImage: 'url',
        },
        postNumbers: [4],
        commentNumbers: [6],
      },
    ],
  }))),
);

export default server;
