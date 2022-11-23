import userEvent from '@testing-library/user-event'
import { fireEvent, renderWithProviders, screen, act, renderHook } from 'utils/test-utils'
import LoginForm from './LoginForm/index'
import SignInPage from './index'
import useFormInput from 'hooks/useFormInput'
import { server } from 'mocks/server'
import { rest } from 'msw'

describe('SignIn Component', () => {
  test('The ID, Password field should be in the document and error message should be in the document when the field is focused out', async () => {
    renderWithProviders(<SignInPage />)
    // id input이 존재하고 값은 없어야 한다.
    const id = screen.getByLabelText('ID')
    expect(id).toBeInTheDocument()
    expect(id.value).toMatch('')

    // id 에러메시지는 초기에 존재하지 않는다.
    const nullIdErrorMessage = screen.queryByText('ID must be at least 3 characters')
    expect(nullIdErrorMessage).not.toBeInTheDocument()

    // id input을 포커즈하고 바로 포커즈 아웃하면 에러메시지가 존재한다.
    userEvent.clear(id)
    fireEvent.focus(id)
    fireEvent.focusOut(id)

    const idErrorMessage = screen.getByText('ID must be at least 3 characters')
    expect(idErrorMessage).toBeInTheDocument()

    // 에러 메시지가 있는 상태로 id input을 입력하면 에러 메시지가 사라진다.
    await userEvent.type(id, 'user1')
    expect(idErrorMessage).not.toBeInTheDocument()

    // // password input이 존재하고 값은 없어야 한다.
    const paswword = screen.getByLabelText('Password')
    expect(paswword).toBeInTheDocument()
    expect(paswword.value).toMatch('')

    // password 에러메시지는 초기에 존재하지 않는다.
    const nullPwErrorMessage = screen.queryByText(/Password must be at least 6/i)

    expect(nullPwErrorMessage).not.toBeInTheDocument()

    // password input을 포커즈하고 바로 포커즈 아웃하면 에러메시지가 존재한다.
    userEvent.clear(paswword)
    fireEvent.focus(paswword)
    fireEvent.focusOut(paswword)

    const pwErrorMessage = screen.getByText(/Password must be at least 6/i)
    expect(pwErrorMessage).toBeInTheDocument()

    // 에러 메시지가 있는 상태로 paswword input을 입력하면 에러 메시지가 사라진다.
    await userEvent.type(paswword, 'password12')
    expect(pwErrorMessage).not.toBeInTheDocument()
  })

  test('The snackbar should be in the document if the ID or password is not valid.', async () => {
    renderWithProviders(<SignInPage />)
    // ID is invalid
    const idInput = screen.getByLabelText('ID')
    userEvent.clear(idInput)
    userEvent.type(idInput, 'us')

    const passwordInput = screen.getByLabelText('Password')
    userEvent.clear(passwordInput)
    userEvent.type(passwordInput, 'qlqjs12')
    // 입력이 올바르지 않으면 스낵바 출력

    const nullSnackBar = screen.queryByText(/The ID or password is not valid./i)
    expect(nullSnackBar).not.toBeInTheDocument()
    const submitButton = screen.getByRole('button', { name: /SIGN IN/i })

    // 로그인 실패 시 스낵바 출력
    userEvent.click(submitButton)

    const snackBar = await screen.findByText(/The ID or password is not valid./i)
    expect(snackBar).toBeInTheDocument()

    // Password is invalid
    userEvent.clear(idInput)
    userEvent.type(idInput, 'user1')

    userEvent.clear(passwordInput)
    userEvent.type(passwordInput, 'qlqj')
    userEvent.click(submitButton)

    const reSnackBar = await screen.findByText(/The ID or password is not valid./i)
    expect(reSnackBar).toBeInTheDocument()
  })

  test('The snackbar should be in the document when the password is not valid', async () => {
    const user = userEvent.setup({ delay: null })
    jest.useFakeTimers()
    // const onSubmit = jest.fn((e) => e.preventDefault())
    renderWithProviders(<SignInPage />)
    const idInput = screen.getByLabelText('ID')
    user.clear(idInput)
    await user.type(idInput, 'user1')

    const passwordInput = screen.getByLabelText('Password')
    user.clear(passwordInput)
    await user.type(passwordInput, 'qlqj')

    // 입력이 올바르지 않으면 스낵바 출력
    const nullSnackBar = screen.queryByText(/The ID or password is not valid./i)
    expect(nullSnackBar).not.toBeInTheDocument()
    const submitButton = screen.getByRole('button', { name: /SIGN IN/i })

    // 로그인 실패 시 스낵바 출력
    await user.click(submitButton)

    const snackBar = screen.getByText(/The ID or password is not valid./i)
    expect(snackBar).toBeInTheDocument()

    // timeout 되면 스낵바가 사라진다.
    act(() => {
      jest.runAllTimers()
    })

    expect(snackBar).not.toBeInTheDocument()
    jest.useRealTimers()
  })

  // firebase/firestore mocking => express 변경 예정
  // test('The snackbar should be in the document when login fails', async () => {
  //   const mockSubmit = jest.fn((e) => e.preventDefault())

  //   const { result: resultid } = renderHook(() => useFormInput(() => true))
  //   const { result: resultpw } = renderHook(() => useFormInput(() => true))

  //   renderWithProviders(<LoginForm onSubmit={mockSubmit} id={resultid} password={resultpw} />)

  //   const idInput = screen.getByLabelText('ID')
  //   userEvent.clear(idInput)
  //   await userEvent.type(idInput, 'noExistUser')

  //   const passwordInput = screen.getByLabelText('Password')
  //   userEvent.clear(passwordInput)
  //   await userEvent.type(passwordInput, 'qlqj123')

  //   const submitButton = screen.getByRole('button', { name: /SIGN IN/i })

  //   const nullNoUserSnackBar = screen.queryByText(/Login failed!/i)
  //   expect(nullNoUserSnackBar).not.toBeInTheDocument()

  //   await userEvent.click(submitButton)
  //   userEvent.click(screen.getByText('SIGN IN'))
  //   const noUserSnackBar = await screen.findByText(/Login failed!/i)
  //   expect(noUserSnackBar).toBeInTheDocument()
  // })

  // input x 아이콘 클릭 시 state 초기화
  // test('', ()=>{})
})

describe('LoginForm Component', () => {
  test('should be able to submit form', async () => {
    const mockSubmit = jest.fn((e) => e.preventDefault())

    const { result: resultid } = renderHook(() => useFormInput(() => true))
    const { result: resultpw } = renderHook(() => useFormInput(() => true))

    renderWithProviders(<LoginForm onSubmit={mockSubmit} id={resultid} password={resultpw} />)

    const idInput = screen.getByLabelText('ID')
    userEvent.type(idInput, 'user1')

    const passwordInput = screen.getByLabelText('Password')
    userEvent.type(passwordInput, 'qlqjs12')

    const submitButton = screen.getByRole('button', { name: /SIGN IN/i })
    await userEvent.click(submitButton)
    expect(mockSubmit).toHaveBeenCalled()
  })
})
