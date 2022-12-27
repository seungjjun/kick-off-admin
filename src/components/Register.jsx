import { useForm } from 'react-hook-form';

import useAdminStore from '../hooks/useAdminStore';

export default function Register() {
  const adminStore = useAdminStore();

  const { register, handleSubmit } = useForm({ reValidateMode: 'onSubmit' });

  const make = async (data) => {
    const {
      name, identification, password,
    } = data;

    await adminStore.register({
      name, identification, password,
    });
  };

  return (
    <form onSubmit={handleSubmit(make)}>
      <label htmlFor="input-name">닉네임</label>
      <input
        id="input-name"
        type="text"
        placeholder="닉네임 (2 ~ 10자)"
        {...register('name')}
      />
      <label htmlFor="input-identification">아이디</label>
      <input
        id="input-identification"
        type="text"
        placeholder="아이디는 4 ~ 16자의 영문 소문자와 숫자로만 입력해주세요."
        {...register('identification')}
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
        {...register('password')}
      />
      <button
        id="signup"
        type="submit"
      >
        회원가입
      </button>
    </form>
  );
}
