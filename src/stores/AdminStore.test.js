import { adminApiService } from '../services/AdminApiService';
import AdminStore from './AdminStore';

const context = describe;

describe('AdminStore', () => {
  let adminStore;

  beforeEach(() => {
    adminStore = new AdminStore();
  });

  context('어드민의 정보를 불러올 경우', () => {
    it('어드민의 이름과 아이디를 확인할 수 있다.', async () => {
      adminApiService.setAccessToken('jel1y');

      await adminStore.fetchAdmin();

      const { admin } = adminStore;
      expect(admin.identification).toBe('jel1y');
      expect(admin.name).toBe('노승준');
    });
  });

  context('로그인에 성공할 경우', () => {
    it('로그인한 어드민의 이름을 확인할 수 있다.', async () => {
      const userId = 'jel1y';
      const password = 'Qwe1234!';

      await adminStore.login({ userId, password });

      const { name } = adminStore;

      expect(name).toBe('짱구');
    });
  });

  context('아이디를 입력하지 않아 로그인에 실패할 경우', () => {
    it('아이디를 입력해달라는 에러 메시지를 확인할 수 있다.', async () => {
      const userId = '';
      const password = 'Qwe1234!';

      await adminStore.login({ userId, password });

      const { loginErrorMessge } = adminStore;

      expect(loginErrorMessge).toBe('아이디를 입력해주세요');
    });

    context('비밀번호를 입력하지 않아 로그인에 실패할 경우', () => {
      it('비밀번호를 입력해달라는 에러 메시지를 확인할 수 있다.', async () => {
        const userId = 'jel1y';
        const password = '';

        await adminStore.login({ userId, password });

        const { loginErrorMessge } = adminStore;

        expect(loginErrorMessge).toBe('비밀번호를 입력해주세요');
      });
    });

    context('아이디를 틀려 로그인에 실패할 경우', () => {
      it('로그인 실패 에러 메시지를 확인할 수 있다.', async () => {
        const userId = 'xxx';
        const password = 'Qwe1234!';

        await adminStore.login({ userId, password });

        const { loginErrorMessge } = adminStore;

        expect(loginErrorMessge).toBe('아이디 혹은 비밀번호가 맞지 않습니다.');
      });
    });

    context('비밀번호를 틀려 로그인에 실패할 경우', () => {
      it('로그인 실패 에러 메시지를 확인할 수 있다.', async () => {
        const userId = 'jel1y';
        const password = 'xxx';

        await adminStore.login({ userId, password });

        const { loginErrorMessge } = adminStore;

        expect(loginErrorMessge).toBe('아이디 혹은 비밀번호가 맞지 않습니다.');
      });
    });
  });
});
