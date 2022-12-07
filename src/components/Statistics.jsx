export default function Statistics({ mostHitPosts, users }) {
  if (Object.keys(mostHitPosts).length === 0) {
    return (
      <p>로딩중...</p>
    );
  }

  return (
    <div>
      <h2>통계</h2>
      <table>
        <thead>
          <tr>
            <th>순위</th>
            <th>글제목</th>
            <th>작성자</th>
            <th>작성일</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          {mostHitPosts.map((post, index) => (
            <tr key={post.id}>
              <td>{index + 1}</td>
              <td>{post.postInformation.title}</td>
              <td>{users.find((user) => user.id === post.userId.userId).name}</td>
              <td>{post.createdAt}</td>
              <td>{post.hit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
