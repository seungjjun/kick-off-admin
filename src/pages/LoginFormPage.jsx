import { useNavigate } from 'react-router-dom';

import { useLocalStorage } from 'usehooks-ts';

import LoginForm from '../components/LoginForm';

import useAdminStore from '../hooks/useAdminStore';

export default function LoginFormPage() {
  const [, setAccessToken] = useLocalStorage('accessToken', '');

  const navigate = useNavigate();

  const adminStore = useAdminStore();

  const submit = async (data) => {
    const { userId, password } = data;

    const accessToken = await adminStore.login({ userId, password });

    if (accessToken) {
      setAccessToken(accessToken);

      navigate('/dashboard');
    }
  };

  return (
    <LoginForm
      submit={submit}
    />
  );
}
