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

  rest.get(`${baseUrl}/admin-processing-posts`, (req, res, ctx) => res(ctx.json({
    data: 3,
  }))),

  rest.get(`${baseUrl}/admin-users`, (req, res, ctx) => res(ctx.json({
    members: {
      postNumbers: [4],
      commentNumbers: [6],
      users: [
        {
          grade: '세미프로',
          id: 1,
          identification: 'jel1y',
          isMyToken: false,
          name: '훈이',
          profileImage: 'url',
        },
      ],
    },
  }))),

  rest.patch(`${baseUrl}/admin-users`, async (req, res, ctx) => {
    const { usersId, grade } = await req.json();

    if (usersId === 1 && grade === '프로') {
      return res(ctx.status(204));
    }

    return res(ctx.status(400));
  }),

  rest.delete(`${baseUrl}/admin-users`, async (req, res, ctx) => {
    const { usersId } = await req.json();

    if (usersId === 1) {
      return res(ctx.status(204));
    }

    return res(ctx.status(400));
  }),

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

  rest.get(`${baseUrl}/admin-boards-rate`, async (req, res, ctx) => res(ctx.json({
    eplBoardValue: 3,
    laligaBoardValue: 3,
    serieaBoardValue: 2,
    bundesligaBoardValue: 1,
  }))),

  rest.post(`${baseUrl}/admin-boards`, async (req, res, ctx) => {
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

  rest.delete(`${baseUrl}/admin-boards/:boardId`, async (req, res, ctx) => {
    const { boardId } = req.params;

    if (boardId === '1') {
      return res(ctx.status(204));
    }
  }),

  rest.get(`${baseUrl}/admin-most-hit-posts`, async (req, res, ctx) => res(ctx.json({
    users: [
      { userId: 1 },

      { userId: 2 },
    ],

    posts: [
      {
        id: 1,
        postInformation: {
          title: '조회수 제일 높은 게시글',
        },
        createdAt: '2022-12-01',
        hit: 400,
      },
    ],
  }))),

  rest.get(`${baseUrl}/admin-today-posts`, async (req, res, ctx) => res(ctx.json({
    posts: [
      { id: 1 },
      { id: 2 },
    ],
  }))),

  rest.get(`${baseUrl}/admin-week-posts`, async (req, res, ctx) => res(ctx.json({
    todayPostsNumber: 2,
    aDayAgoPostsNumber: 1,
    twoDaysAgoPostsNumber: 3,
    threeDaysAgoPostsNumber: 7,
    fourDaysAgoPostsNumber: 1,
    fiveDaysAgoPostsNumber: 1,
    sixDaysAgoPostsNumber: 3,
  }))),

  rest.get(`${baseUrl}/admin-today-signup-users`, async (req, res, ctx) => res(ctx.json({
    users: [
      { userId: 1 },
      { userId: 2 },
    ],
  }))),

  rest.get(`${baseUrl}/admin-today-comments`, async (req, res, ctx) => res(ctx.json({
    commentsNumber: 2,
  }))),

  rest.get(`${baseUrl}/admin-week-comments`, async (req, res, ctx) => res(ctx.json({
    commentsNumber: 3,
    recommentsNumber: 4,
  }))),

  rest.patch(`${baseUrl}/admin-grade`, async (req, res, ctx) => {
    const { applicationPostId, grade, userName } = await req.json();

    if (applicationPostId === 1 && grade === '프로' && userName === '짱구') {
      return res(ctx.status(204));
    }

    return res(ctx.status(400));
  }),

  rest.delete(`${baseUrl}/admin-post`, async (req, res, ctx) => {
    const { applicationPostId } = await req.json();

    if (applicationPostId === 1) {
      return res(ctx.status(204));
    }

    return res(ctx.status(400));
  }),

  rest.get(`${baseUrl}/admin`, async (req, res, ctx) => {
    const accessToken = await req.headers.get('Authorization')
      .substring('bearer '.length);

    if (accessToken === 'jel1y') {
      return res(
        ctx.status(200),
        ctx.json({
          identification: 'jel1y',
          name: '노승준',
        }),
      );
    }

    return res(ctx.status(400));
  }),

  rest.post(`${baseUrl}/admin-session`, async (req, res, ctx) => {
    const { identification, password } = await req.json();

    if (identification === 'jel1y' && password === 'Qwe1234!') {
      return res(ctx.json({
        accessToekn: 'ACCESS.TOKEN',
        name: '짱구',
      }));
    }

    if (identification === '') {
      return res(
        ctx.status(400),
        ctx.json({
          message: '아이디를 입력해주세요',
        }),
      );
    }

    if (password === '') {
      return res(
        ctx.status(400),
        ctx.json({
          message: '비밀번호를 입력해주세요',
        }),
      );
    }

    if (identification !== 'jel1y' || password !== 'Qwe1234!') {
      return res(
        ctx.status(400),
        ctx.json({
          message: '아이디 혹은 비밀번호가 맞지 않습니다.',
        }),
      );
    }

    return res(ctx.status(400));
  }),

  rest.delete(`${baseUrl}/admin-posts/:postId`, async (req, res, ctx) => {
    const { postId } = req.params;

    if (postId === '1') {
      return res(ctx.status(204));
    }

    return res(ctx.status(400));
  }),
);

export default server;
