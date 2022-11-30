// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import { server } from './mocks/server'

// 모든 테스트를 실행하기 전에 server listen
beforeEach(() => server.listen())

// 테스트 중에 추가한 req 핸들러들을 리셋 => 다른 테스트에 영향을 미치지 않기 위해서
afterEach(() => server.resetHandlers())

// 테스트가 끝나면 서버를 cleanup
afterAll(() => server.close())
