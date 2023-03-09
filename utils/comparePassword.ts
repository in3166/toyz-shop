import bcrypt from 'bcryptjs'

export const comparePassword = (plainPassword: string, hashedPassword: string): Promise<boolean> => {
  return new Promise((resolve) => {
    bcrypt.compare(plainPassword, hashedPassword, (err, res) => {
      resolve(res)
    })
  })
}
