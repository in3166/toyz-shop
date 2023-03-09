import AWS, { S3 } from 'aws-sdk'
import formidable from 'formidable'
import { NextApiRequest } from 'next/types'
import { v1 } from 'uuid'
import fs from 'fs'

AWS.config.update({
  accessKeyId: process.env.IAM_ACCESS_KEY_ID || '',
  secretAccessKey: process.env.IAM_SECRET_ACCESS_KEY || '',
  credentials: {
    accessKeyId: process.env.IAM_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.IAM_SECRET_ACCESS_KEY || '',
  },
  region: 'ap-northeast-2',
})

const s3 = new S3({
  signatureVersion: 'v4',
  region: 'ap-northeast-2',
  accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
})

const params = {
  Bucket: process.env.S3_BUCKET_NAME || '',
  Key: '',
  ACL: 'public-read',
  Body: {},
}

const asyncParse2 = (req: NextApiRequest) =>
  new Promise((resolve, reject) => {
    const form = new formidable.IncomingForm({
      uploadDir: `./public/products`,
      filter({ name }) {
        return !!name && (name.includes('img') || name.includes('file'))
      },
      filename(name, ext, part) {
        return `${v1()}-${part.originalFilename}`
      },
      maxFileSize: 5 * 1024 * 1024,
      multiples: true,
    })
    form.on('file', (name, file) => {
      if (!file.mimetype?.includes('image')) {
        throw new Error('Not image file.')
      }
    })
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err)
      // resolve "returns" the promise so you will have a straighforward logic flow
      resolve({ fields, files })
      return null
    })
  })

export const asyncParse = (req: NextApiRequest): Promise<{ fields: any; files: any; url: string }> =>
  new Promise((resolve, reject) => {
    const form = new formidable.IncomingForm({
      // uploadDir: `./public/products`,
      filter({ name }) {
        return !!name && (name.includes('img') || name.includes('file'))
      },
      filename(name, ext, part) {
        return `${v1()}-${part.originalFilename}`
      },
      maxFileSize: 5 * 1024 * 1024,
      multiples: true,
    })
    form.on('file', (name, file) => {
      if (!file.mimetype?.includes('image')) {
        throw new Error('Not image file.')
      }
    })
    form.parse(req, async (err, fields, files: any) => {
      if (err) return reject(err)
      const fileName = files?.file?.newFilename ?? ''
      const body = fs.createReadStream(files?.file?.filepath)
      params.Key = `proudcts/${fileName}`
      params.Body = body
      try {
        s3.upload(
          params,
          (
            error: any,
            data: {
              ETag: string
              Location: string
              key?: string
              Key: string
              Bucket: string
            }
          ) => {
            if (error) reject(error)
            else resolve({ files, fields, url: data.Location })
          }
        )
      } catch (error) {
        reject(error)
      }
      return null
    })
  })
