import userEvent from '@testing-library/user-event'
import { fireEvent, renderWithProviders, screen } from 'utils/test-utils'
import SignIn from './index'

describe('SignIn Compoenet', () => {
  test('input ID and Password', async () => {
    renderWithProviders(<SignIn />)

    const id = screen.getByLabelText('ID')
    expect(id).toBeInTheDocument()

    const errorMessage = screen.queryByRole('paragraph', { name: 'Input your ID' })
    expect(errorMessage).toBeNull()

    // focus off validate 문자 표시 on / off
    userEvent.clear(id)
    fireEvent.focus(id)
    fireEvent.focusOut(id)

    const errorMessage2 = await screen.findByText('Input your ID')
    expect(errorMessage2).toBeInTheDocument()

    userEvent.type(id, 'user1')
    expect(errorMessage2).not.toBeInTheDocument()

    const paswword = screen.getByLabelText('Password')
    expect(paswword).toBeInTheDocument()

    const pwErrorMessage = screen.queryByRole('paragraph', { name: 'Input your ID' })
    expect(pwErrorMessage).toBeNull()

    // focus off validate 문자 표시 on / off
    userEvent.clear(paswword)
    fireEvent.focus(paswword)
    fireEvent.focusOut(paswword)

    const pwErrorMessage2 = await screen.findByText('Input your Password')
    expect(pwErrorMessage2).toBeInTheDocument()

    userEvent.type(paswword, 'passwordTest')
    expect(pwErrorMessage2).not.toBeInTheDocument()
  })
})
