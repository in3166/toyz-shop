import userEvent from '@testing-library/user-event'
import { fireEvent, renderWithProviders, screen } from 'utils/test-utils'
import { validateId, validatePassword } from 'utils/validates/validateInput'
import SignIn from './index'

describe('SignIn Compoenet', () => {
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
    renderWithProviders(<SignIn />)
    // id input이 존재하고 값은 없어야 한다.
    const id = screen.getByLabelText('ID')
    expect(id).toBeInTheDocument()
    expect(id.value).toMatch('')

    // id 에러메시지는 초기에 존재하지 않는다.
    const idErrorMessage = screen.queryByRole('paragraph', { name: 'ID must be at least 3 characters' })
    expect(idErrorMessage).not.toBeInTheDocument()

    // id input을 포커즈하고 바로 포커즈 아웃하면 에러메시지가 존재한다.
    userEvent.clear(id)
    fireEvent.focus(id)
    fireEvent.focusOut(id)

    const idErrorMessage2 = await screen.findByText('ID must be at least 3 characters')
    expect(idErrorMessage2).toBeInTheDocument()

    // 에러 메시지가 있는 상태로 id input을 입력하면 에러 메시지가 사라진다.
    userEvent.type(id, 'user1')
    expect(idErrorMessage2).not.toBeInTheDocument()

    // password input이 존재하고 값은 없어야 한다.
    const paswword = screen.getByLabelText('Password')
    expect(paswword).toBeInTheDocument()
    expect(paswword.value).toMatch('')

    // password 에러메시지는 초기에 존재하지 않는다.
    const pwErrorMessage = screen.queryByRole('paragraph', {
      name: 'Password must be at least 6 characters including numbers and alphabets',
    })
    expect(pwErrorMessage).not.toBeInTheDocument()

    // password input을 포커즈하고 바로 포커즈 아웃하면 에러메시지가 존재한다.
    userEvent.clear(paswword)
    fireEvent.focus(paswword)
    fireEvent.focusOut(paswword)

    const pwErrorMessage2 = await screen.findByText(
      'Password must be at least 6 characters including numbers and alphabets'
    )
    expect(pwErrorMessage2).toBeInTheDocument()

    // 에러 메시지가 있는 상태로 paswword input을 입력하면 에러 메시지가 사라진다.
    userEvent.type(paswword, 'passwordTest')

    const pwErrorMessage3 = screen.queryByRole('paragraph', {
      name: 'Password must be at least 6 characters including numbers and alphabets',
    })
    expect(pwErrorMessage3).not.toBeInTheDocument()
  })

  test('should be able to submit form', () => {
    const mockFn = jest.fn()
    const { getByRole } = renderWithProviders(<SignIn />)
  })
})
