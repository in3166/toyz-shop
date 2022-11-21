import { rest } from 'msw'

export const handlers = [
  rest.get('http://localhost:5000/users', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: 'America',
          imagePath: '/images/america.jpeg',
        },
        {
          name: 'England',
          imagePath: '/images/england.jpeg',
        },
      ])
    )
  }),
]
