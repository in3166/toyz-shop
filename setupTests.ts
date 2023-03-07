import '@testing-library/jest-dom'
import { server } from './__tests__/__mocks__/server'

// 모든 테스트를 실행하기 전에 server listen
beforeEach(() => server.listen())
beforeEach(() =>
  jest.mock('react-i18next', () => ({
    // this mock makes sure any components using the translate hook can use it without a warning being shown
    useTranslation: () => {
      return {
        t: (str: string) => str,
        i18n: {
          changeLanguage: () => new Promise(() => {}),
        },
      }
    },
    initReactI18next: {
      type: '3rdParty',
      init: jest.fn(),
    },
  }))
)

// 테스트 중에 추가한 req 핸들러들을 리셋 => 다른 테스트에 영향을 미치지 않기 위해서
afterEach(() => server.resetHandlers())

// 테스트가 끝나면 서버를 cleanup
afterAll(() => server.close())
