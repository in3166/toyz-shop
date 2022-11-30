import userEvent from '@testing-library/user-event'
import { fireEvent, renderWithProviders, screen, act, renderHook } from 'utils/test-utils'
import SignUpForm from './SignUpForm'
import SignUpPage from './index'
import useFormInput from 'hooks/useFormInput'
import { signUpValue } from 'fixtures/users'

describe('SignUp Component', () => {
  test.each(signUpValue)('The %s field should be in the document', async (fieldText) => {
    renderWithProviders(<SignUpPage />)
    const field = screen.getByLabelText(fieldText)
    expect(field).toBeInTheDocument()
    expect(field.value).toMatch('')
  })

  test.each(signUpValue)(
    'error message should be in the document when the %s value is not valid',
    async (fieldText, { messageText, validInputText, notValidInputText }) => {
      renderWithProviders(<SignUpPage />)

      const field = screen.getByLabelText(fieldText)
      // id 에러메시지는 초기에 존재하지 않는다.
      const nullErrorMessage = screen.queryByText(messageText)
      expect(nullErrorMessage).not.toBeInTheDocument()

      // id input을 포커즈하고 바로 포커즈 아웃하면 에러메시지가 존재한다.
      userEvent.clear(field)
      fireEvent.focus(field)
      fireEvent.focusOut(field)

      const errorMessage = screen.getByText(messageText)
      expect(errorMessage).toBeInTheDocument()

      // 에러 메시지가 있는 상태로 id input을 입력하면 에러 메시지가 사라진다.
      await userEvent.type(field, validInputText)
      expect(errorMessage).not.toBeInTheDocument()

      // invalid 값을 입력하면 에러 메시지가 나타난다.
      userEvent.clear(field)
      await userEvent.type(field, notValidInputText)
      const reErrorMessage = await screen.findByText(messageText)
      expect(reErrorMessage).toBeInTheDocument()
    }
  )

  test('The snackbar should be in the document when the input value is not valid', async () => {
    const user = userEvent.setup({ delay: null })
    jest.useFakeTimers()

    renderWithProviders(<SignUpPage />)
    const idInput = screen.getByLabelText('ID')
    user.clear(idInput)
    await user.type(idInput, 'user1')

    // 입력이 올바르지 않으면 스낵바 출력
    const nullSnackBar = screen.queryByText(/Input value is not valid./i)
    expect(nullSnackBar).not.toBeInTheDocument()
    const submitButton = screen.getByRole('button', { name: /SIGN UP/i })

    // 로그인 실패 시 스낵바 출력
    await user.click(submitButton)

    const snackBar = screen.getByText(/Input value is not valid./i)
    expect(snackBar).toBeInTheDocument()

    // timeout 되면 스낵바가 사라진다.
    act(() => {
      jest.runAllTimers()
    })

    expect(snackBar).not.toBeInTheDocument()
    jest.useRealTimers()
  })
})

describe('SignUpForm Component', () => {
  test('should be able to submit form', async () => {
    const mockSubmit = jest.fn((e) => e.preventDefault())

    const { result: resultId } = renderHook(() => useFormInput(() => true))
    const { result: resultPw } = renderHook(() => useFormInput(() => true))
    const { result: resultName } = renderHook(() => useFormInput(() => true))
    const { result: resultPhone } = renderHook(() => useFormInput(() => true))

    renderWithProviders(
      <SignUpForm onSubmit={mockSubmit} id={resultId} password={resultPw} name={resultName} phone={resultPhone} />
    )

    const idInput = screen.getByLabelText('ID')
    userEvent.type(idInput, 'user1')
    const passwordInput = screen.getByLabelText('Password')
    userEvent.type(passwordInput, 'qlqjs12')
    const nameInput = screen.getByLabelText('Name')
    userEvent.type(nameInput, 'name')
    const phoneInput = screen.getByLabelText('Phone')
    userEvent.type(phoneInput, '010-1234-1234')

    const submitButton = screen.getByRole('button', { name: /SIGN UP/i })
    await userEvent.click(submitButton)
    expect(mockSubmit).toHaveBeenCalled()
  })
})
