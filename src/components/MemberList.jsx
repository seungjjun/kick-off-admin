/* eslint-disable jsx-a11y/label-has-associated-control */
export default function MemberList() {
  return (
    <div>
      <h2>전체 멤버 관리</h2>
      <div>
        <label htmlFor="input-memberId">멤버 검색</label>
        <input
          id="input-memberId"
          type="text"
        />
        <button type="button">검색</button>
      </div>
      <div>
        <p>카페 멤버 수</p>
        <table>
          <thead>
            <tr>
              <th>닉네임 (아이디)</th>
              <th>등급</th>
              <th>게시글 수</th>
              <th>댓글 수</th>
            </tr>
          </thead>
          <tbody>
            <tr />
          </tbody>
        </table>
      </div>
    </div>
  );
}
