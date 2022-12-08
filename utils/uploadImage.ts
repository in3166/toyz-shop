import { v1 } from 'uuid'
import nextConnect from 'next-connect'
import multer, { FileFilterCallback } from 'multer'
import path from 'path'
import dayjs from 'dayjs'
import { NextApiRequest } from 'next'

export const storage = multer.diskStorage({
  destination(
    req: Express.Request,
    file: Express.Multer.File,
    callback: (error: Error | null, destination: string) => void
  ) {
    console.log('1:, ', req.file)
    callback(null, 'public/products/')
  },
  filename(req: Express.Request, file: Express.Multer.File, callback: (error: Error | null, filename: string) => void) {
    const uudi = v1()
    console.log('2:, ', file.originalname)
    callback(null, `${uudi}_${file.originalname}`)
  },
})

export const fileFilter = (request: Express.Request, file: Express.Multer.File, callback: FileFilterCallback) => {
  const ext = path.extname(file.originalname)
  console.log('3:, ', file.originalname)
  if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
    callback(new Error('PNG, JPG만 업로드하세요'))
  }
  callback(null, true)
}

const upload = multer({ storage, fileFilter, limits: { fileSize: 5 * 1024 * 1024 } })

export default upload
