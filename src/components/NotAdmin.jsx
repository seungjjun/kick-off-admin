import styled from 'styled-components';

import { useLocalStorage } from 'usehooks-ts';

import useAdminStore from '../hooks/useAdminStore';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;    

  button {
    margin-top: 1em;
    padding: 1em 6em;
    border: none;
    border-radius: 7px;
    background-color: #000;
    color: #fff;
    cursor: pointer;

    :hover {
      background-color: #CD2C2C;
      color: #000;
    }
  }
`;

const Title = styled.div`
  display: flex;
  margin-bottom: 2em;
  width: 15em;
  height: 10em;
  background: url("https://user-images.githubusercontent.com/104769120/206422757-c138bb7f-6f62-45e3-8f14-042ec9da5efd.png");
  background-size: cover;
`;

export default function NotAdmin({ navigate }) {
  const [, setAccessToken] = useLocalStorage('accessToken', '');

  const adminStroe = useAdminStore();

  const handleClickBack = () => {
    navigate('/');
    adminStroe.setAdminState();
    setAccessToken('');
  };

  return (
    <Container>
      <Title />
      <h2>관리자 계정이 아닙니다.</h2>
      <button type="button" onClick={handleClickBack}>뒤로가기</button>
    </Container>
  );
}
