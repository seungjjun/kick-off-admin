/* eslint-disable react/prop-types */
export default function GradeBoard({ applicationPosts, acceptance, refusal }) {
  const handleClickAcceptance = (postId, applicationGrade, name) => {
    acceptance(postId, applicationGrade, name);
  };

  const handleClickRefusal = (postId) => {
    refusal(postId);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>신청자</th>
            <th>신청등급</th>
            <th>현재등급</th>
            <th>게시글수</th>
            <th>댓글 수</th>
            <th>신청사유</th>
          </tr>
        </thead>
        <tbody>
          {applicationPosts.map((post) => (
            <tr key={post.id}>
              <td>{post.applicant.name}</td>
              <td>{post.applicant.applicationGrade}</td>
              <td>{post.applicant.currentGrade}</td>
              <td>{post.creationNumber.postNumber}</td>
              <td>{post.creationNumber.commentNumber}</td>
              <td>{post.reason}</td>
              <td>
                <button
                  type="button"
                  onClick={() => handleClickAcceptance(
                    post.id,
                    post.applicant.applicationGrade,
                    post.applicant.name,
                  )}
                >
                  수락
                </button>
                <button
                  type="button"
                  onClick={() => handleClickRefusal(post.id)}
                >
                  거절
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
