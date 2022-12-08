import { ChangeEvent, useState } from 'react'
import type { NextPage } from 'next'
import { AppProps } from 'next/app'
import { NextPageContext } from 'next/types'
import dayjs from 'dayjs'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { useI18n } from 'hooks'
import { IOnUploadSubmit, IProductItem } from 'types/product'
import Container from 'components/_shared/Container'
import UploadImageForm from 'components/UploadProudctForm'
import errorHandler from 'lib/errorHandler'

const AddProudctPage: NextPage<AppProps> = ({ pageProps }: AppProps) => {
  const t = useI18n()

  const handleSubmit = async (data: IOnUploadSubmit, file: File) => {
    console.log('1: ', data, file)
    const formData = new FormData()
    formData.append(
      'body',
      JSON.stringify({
        data,
      })
    )
    formData.append('file', file)
    console.log('2')

    const response = await fetch('/api/products', {
      method: 'POST',
      body: formData,
    })
    console.log('3', response)

    const uploadResult = await response.json()
    console.log('uploadResult', uploadResult)
    if (!uploadResult?.success) {
      const field = uploadResult.error?.keyValue?.email !== undefined ? 'Email' : 'ID'

      let message = !uploadResult.error.message ? errorHandler(uploadResult.error?.code) : uploadResult.error.message
      message += ` (${field})`
      return { ...uploadResult.error, message }
    }
    // const addProductResult = await response.json()
    // if (!addProductResult.success) {
    //   const field = addProductResult.error?.keyValue?.email !== undefined ? 'Email' : 'ID'
    //   let message = !addProductResult.error.message
    //     ? errorHandler(addProductResult.error?.code)
    //     : addProductResult.error.message
    //   message += ` (${field})`
    //   return { ...addProductResult.error, message }
    // }

    return null
  }

  return (
    <Container color='white' width='lg'>
      <header>
        <h3>{`${t('upload.header')}`}</h3>
      </header>
      <br />
      <UploadImageForm onUploadSubmit={handleSubmit} />
    </Container>
  )
}

export const getStaticProps = async (context: NextPageContext) => {
  const { locale, locales } = context

  return {
    props: {
      ...(await serverSideTranslations(locale || 'ko', ['common'])),
      locales,
    },
  }
}

export default AddProudctPage
