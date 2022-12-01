/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import config from './config';

const baseUrl = config.apiBaseUrl;

const server = setupServer(
  rest.get(`${baseUrl}/posts`, (req, res, ctx) => res(ctx.json({
    applicationPosts: [
      {
        id: 682,
        reason: '테스트',
        applicant: { name: '김민재', currentGrade: '아마추어', applicationGrade: '세미프로' },
        creationNumber: { postNumber: 1, commentNumber: 4 },
      },
    ],
  }))),
);

export default server;
