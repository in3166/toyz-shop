import bcrypt from 'bcrypt'

export const confirmPasswordHash = (plainPassword: string, hashedPassword: string): Promise<boolean> => {
  return new Promise((resolve) => {
    bcrypt.compare(plainPassword, hashedPassword, (err, res) => {
      resolve(res)
    })
  })
}
