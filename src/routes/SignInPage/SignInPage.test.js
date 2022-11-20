import { renderWithProviders, screen } from 'utils/test-utils'
import SignIn from './index'

describe('SignIn Compoenet', () => {
  test('checkbox and button', () => {
    renderWithProviders(<SignIn />)

    const id = screen.getByLabelText('ID')
    expect(id).toBeInTheDocument()

    const paswword = screen.getByLabelText('Password')
    expect(paswword).toBeInTheDocument()

    // focus off validate 문자 표시 on / off

    // 전송 시
  })
})
