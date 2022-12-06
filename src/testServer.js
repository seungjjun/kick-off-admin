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

  rest.get(`${baseUrl}/admin-user`, (req, res, ctx) => res(ctx.json({
    user: {
      id: 1,
      identification: 'jel1y',
      name: '훈이',
      grade: '프로',
    },

    postNumber: 1,
    commentNumber: 3,
  }))),

  rest.get(`${baseUrl}/boards`, (req, res, ctx) => res(ctx.json({
    board: {
      board: [
        {
          id: 1,
          boardName: {
            value: '전체 게시판',
          },
          parentId: null,
          deleted: false,
        },

        {
          id: 2,
          boardName: {
            value: 'EPL',
          },
          parentId: null,
          deleted: false,
        },

        {
          id: 3,
          boardName: {
            value: 'LaLiga',
          },
          parentId: null,
          deleted: false,
        },

        {
          id: 4,
          boardName: {
            value: '토트넘',
          },
          parentId: 2,
          deleted: false,
        },
      ],
    },
  }))),

  rest.post(`${baseUrl}/admin-board`, async (req, res, ctx) => {
    const board = await req.json();

    if (board.parentId === '2' && board.boardName === '손흥민') {
      return res(ctx.status(201));
    }

    if (board.parentId === '0') {
      return res(
        ctx.status(400),
        ctx.json({
          message: '게시판을 생성할 수 없습니다. 다시 한번 확인해주세요.',
        }),
      );
    }

    return res(ctx.status(400));
  }),

  rest.delete(`${baseUrl}/admin-board/:boardId`, async (req, res, ctx) => {
    const { boardId } = req.params;

    if (boardId === '1') {
      return res(ctx.status(204));
    }
  }),
);

export default server;
