/* eslint-disable react/prop-types */
export default function DashBoard({ statistics }) {
  return (
    <div>
      <div>
        <div>
          <p>
            오늘 작성 게시글 수
            {' '}
            {statistics.todayCreatedPostsNumber}
          </p>
        </div>
        <div>
          <p>
            오늘 작성 댓글 수
            {' '}
            {statistics.todayWrittenCommentsNumber}
          </p>
        </div>
        <div>
          <p>
            오늘 가입 멤버 수
            {' '}
            {statistics.todaySignupUserNumber}
          </p>
        </div>
      </div>
    </div>
  );
}
