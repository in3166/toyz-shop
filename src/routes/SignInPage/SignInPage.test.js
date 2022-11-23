import userEvent from '@testing-library/user-event'
import { renderHook } from '@testing-library/react-hooks'
import { fireEvent, renderWithProviders, screen } from 'utils/test-utils'
import { validateId, validatePassword } from 'utils/validates/validateInput'
import LoginForm from './LoginForm/index'
import SignInPage from './index'
import useFormInput from 'hooks/useFormInput'

describe('LofinForm Compoenet', () => {
  test('validate function should pass on correct input', () => {
    const id = 'example'
    expect(validateId(id)).toBe(true)

    const password = 'password1'
    expect(validatePassword(password)).toBe(true)
  })

  test('validate function should fail on incorrect input', () => {
    const id = 'ex'
    expect(validateId(id)).not.toBe(true)

    const password = 'pw'
    expect(validatePassword(password)).not.toBe(true)
  })

  test('The ID, Password field should be in the document and error message should be in the document when the field is focused out', async () => {
    renderWithProviders(<SignInPage />)
    // id input이 존재하고 값은 없어야 한다.
    const id = screen.getByLabelText('ID')
    expect(id).toBeInTheDocument()
    expect(id.value).toMatch('')

    // id 에러메시지는 초기에 존재하지 않는다.
    const nullIdErrorMessage = screen.queryByRole('paragraph', { name: 'ID must be at least 3 characters' })
    expect(nullIdErrorMessage).not.toBeInTheDocument()

    // id input을 포커즈하고 바로 포커즈 아웃하면 에러메시지가 존재한다.
    userEvent.clear(id)
    fireEvent.focus(id)
    fireEvent.focusOut(id)

    const idErrorMessage = await screen.findByText('ID must be at least 3 characters')
    expect(idErrorMessage).toBeInTheDocument()

    // 에러 메시지가 있는 상태로 id input을 입력하면 에러 메시지가 사라진다.
    userEvent.type(id, 'user1')
    expect(idErrorMessage).not.toBeInTheDocument()

    // password input이 존재하고 값은 없어야 한다.
    const paswword = screen.getByLabelText('Password')
    expect(paswword).toBeInTheDocument()
    expect(paswword.value).toMatch('')

    // password 에러메시지는 초기에 존재하지 않는다.
    const nullPwErrorMessage = screen.queryByRole('paragraph', {
      name: 'Password must be at least 6 characters including numbers and alphabets',
    })
    expect(nullPwErrorMessage).not.toBeInTheDocument()

    // password input을 포커즈하고 바로 포커즈 아웃하면 에러메시지가 존재한다.
    userEvent.clear(paswword)
    fireEvent.focus(paswword)
    fireEvent.focusOut(paswword)

    const pwErrorMessage = await screen.findByText(
      'Password must be at least 6 characters including numbers and alphabets'
    )
    expect(pwErrorMessage).toBeInTheDocument()

    // 에러 메시지가 있는 상태로 paswword input을 입력하면 에러 메시지가 사라진다.
    userEvent.type(paswword, 'passwordTest')

    const reNullPwErrorMessage = screen.queryByRole('paragraph', {
      name: 'Password must be at least 6 characters including numbers and alphabets',
    })
    expect(reNullPwErrorMessage).not.toBeInTheDocument()
  })

  test('should be able to submit form', () => {
    const mockSubmit = jest.fn()

    const { result: resultid } = renderHook(() => useFormInput(() => true))
    const { result: resultpw } = renderHook(() => useFormInput(() => true))

    renderWithProviders(<LoginForm onSubmit={mockSubmit} id={resultid} password={resultpw} />)

    const idInput = screen.getByLabelText('ID')
    userEvent.clear(idInput)
    userEvent.type(idInput, 'user1')

    const passwordInput = screen.getByLabelText('Password')
    userEvent.clear(passwordInput)
    userEvent.type(passwordInput, 'qlqjs12')

    const submitButton = screen.getByRole('button', { name: /SIGN IN/i })
    userEvent.click(submitButton)
    expect(mockSubmit).toHaveBeenCalled()
  })
})
