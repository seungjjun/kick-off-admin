/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import useAdminStore from '../hooks/useAdminStore';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  div:nth-child(2)  {
    width: 50%;
    display: flex;
    flex-direction: column;
  }

  input {
    padding: 0.7em 2em;
    border: 1px solid #D8D8D8;
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

const InputId = styled.input`
`;

const InputPassword = styled.input`
  margin-top: 0.5em;
`;

const LoginButton = styled.button`
  margin-top: 1em;
  padding: 1em;
  border: none;
  border-radius: 7px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
`;

const Error = styled.p`
  margin-top: 0.5em;
  color: #FF424D;
`;

export default function LoginForm({ submit }) {
  const adminStore = useAdminStore();

  const { register, handleSubmit, formState: { errors } } = useForm({ reValidateMode: 'onSubmit' });

  const onSubmit = async (data) => {
    submit(data);
  };

  const make = async (data) => {
    const {
      name, identification, password,
    } = data;

    await adminStore.register({
      name, identification, password,
    });
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title />
        <div>
          <InputId
            id="input-userId"
            type="text"
            placeholder="아이디"
            error={errors.userId}
            {...register('userId', {
              required: { value: true, message: '아이디를 입력해주세요' },
            })}
          />
          {errors.userId ? (
            <Error>{errors.userId.message}</Error>
          ) : null}
          <InputPassword
            id="input-password"
            type="password"
            placeholder="비밀번호"
            error={errors.password}
            {...register('password', {
              required: { value: true, message: '비밀번호를 입력해주세요' },
            })}
          />
          {errors.password ? (
            <Error>{errors.password.message}</Error>
          ) : adminStore.isLoginFail ? (
            <Error>{adminStore.loginErrorMessge}</Error>
          ) : null}
          <LoginButton type="submit">로그인</LoginButton>
        </div>
      </Form>
      <form onSubmit={handleSubmit(make)}>
        <label htmlFor="input-name">닉네임</label>
        <input
          id="input-name"
          type="text"
          placeholder="닉네임 (2 ~ 10자)"
        />
        <label htmlFor="input-identification">아이디</label>
        <input
          id="input-identification"
          type="text"
          placeholder="아이디는 4 ~ 16자의 영문 소문자와 숫자로만 입력해주세요."
        />
        <label
          htmlFor="input-password"
        >
          비밀번호
        </label>
        <input
          id="input-password"
          type="password"
          placeholder="8글자 이상의 영문(대소문자), 숫자, 특수문자가 모두 포함되어야 합니다."
        />
        <button
          id="signup"
          type="submit"
        >
          회원가입
        </button>
      </form>
    </>
  );
}
