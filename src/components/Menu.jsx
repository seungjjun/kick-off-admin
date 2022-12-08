import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Container = styled.div`
  /* display: flex; */
  width: 250px;

`;

const MyInformation = styled.div`
  /* padding-top: 2em; */
`;

const MenuList = styled.ul`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  
  a {
    margin-bottom: 1.3em;
  }
`;

export default function Menu() {
  return (
    <Container>
      <MyInformation />
      <nav>
        <MenuList>
          <Item>
            <Link to="/manage-members">멤버 관리</Link>
            <Link to="/manage-levelup">등업 신청 관리</Link>
            <Link to="/manage-board">게시판 관리</Link>
            <Link to="/statistics">통계</Link>
          </Item>
        </MenuList>
      </nav>
    </Container>
  );
}
