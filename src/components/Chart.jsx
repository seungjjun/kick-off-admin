/* eslint-disable react/prop-types */
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export default function Chart({ days, postsByDate, commentsByDate }) {
  if (Object.keys(postsByDate).length === 0
  || Object.keys(commentsByDate).length === 0) {
    return (
      <p>데이터를 불러오는 중입니다.</p>
    );
  }

  const data = [
    {
      name: `${days.sixDaysAgo}일`,
      게시글수: postsByDate.posts.sixDaysAgoPostsNumber,
      댓글수: commentsByDate.comments.sixDaysAgoCommentsNumber,
      amt: 20,
    },
    {
      name: `${days.fiveDaysAgo}일`,
      게시글수: postsByDate.posts.fiveDaysAgoPostsNumber,
      댓글수: commentsByDate.comments.fiveDaysAgoCommentsNumber,
      amt: 20,
    },
    {
      name: `${days.fourDaysAgo}일`,
      게시글수: postsByDate.posts.fourDaysAgoPostsNumber,
      댓글수: commentsByDate.comments.fourDaysAgoCommentsNumber,
      amt: 20,
    },
    {
      name: `${days.threeDaysAgo}일`,
      게시글수: postsByDate.posts.threeDaysAgoPostsNumber,
      댓글수: commentsByDate.comments.threeDaysAgoCommentsNumber,
      amt: 20,
    },
    {
      name: `${days.twoDaysAgo}일`,
      게시글수: postsByDate.posts.twoDaysAgoPostsNumber,
      댓글수: commentsByDate.comments.twoDaysAgoCommentsNumber,
      amt: 20,
    },
    {
      name: `${days.aDayAgo}일`,
      게시글수: postsByDate.posts.aDayAgoPostsNumber,
      댓글수: commentsByDate.comments.aDayAgoCommentsNumber,
      amt: 20,
    },
    {
      name: `${days.today}일`,
      게시글수: postsByDate.posts.todayPostsNumber,
      댓글수: commentsByDate.comments.todayCommentsNumber,
      amt: 20,
    },
  ];

  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="게시글수" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="댓글수" stroke="#82ca9d" />
    </LineChart>
  );
}
