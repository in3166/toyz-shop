export interface IMongooseError extends Error {
  index?: number
  code: number
  keyPattern?: { id?: number }
  keyValue?: { id?: string }
  message?: string
}
