import { user } from 'fixtures/users'
import { rest } from 'msw'

export const handlers = [
  rest.get('http://localhost:5000/users', (req, res, ctx) => {
    return res(ctx.json(user))
  }),
  rest.post('http://localhost:5000/login', (req, res, ctx) => {
    console.log(req.json())
    return res(
      ctx.json([
        {
          id: 'admin',
          name: '김수박',
          phone: '010-1234-1236',
          pw: 'qlqjs123',
          role: 1,
        },
        {
          id: 'user1',
          likes: [],
          name: '최고수',
          phone: '010-1234-1262',
          pw: 'qlqjs123',
          role: 0,
        },
      ])
    )
  }),
]
