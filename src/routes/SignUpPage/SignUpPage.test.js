import { renderWithProviders, screen } from 'utils/test-utils'
import SignUp from './index'

describe('SignUp Compoenet', () => {
  test('checkbox and button', () => {
    renderWithProviders(<SignUp />)

    const id = screen.getByLabelText('ID')
    expect(id).toBeInTheDocument()

    const paswword = screen.getByLabelText('Password')
    expect(paswword).toBeInTheDocument()

    const name = screen.getByLabelText('Name')
    expect(name).toBeInTheDocument()

    const phone = screen.getByLabelText('Phone')
    expect(phone).toBeInTheDocument()

    // focus off validate 문자 표시 on / off

    // 전송 시
  })
})
