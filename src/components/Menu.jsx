import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/manage-members">멤버 관리</Link>
            <Link to="/manage-levelup">등업 신청 관리</Link>
            <Link to="/manage-board">게시판 관리</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
