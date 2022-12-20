import type { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { NextPageContext } from 'next/types'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { useI18n } from 'hooks'
import { IOnUploadSubmit } from 'types/product'
import Container from 'components/_shared/Container'
import UploadImageForm from 'components/UploadProudctForm'
import errorHandler from 'lib/errorHandler'

const AddProudctPage: NextPage<AppProps> = () => {
  const t = useI18n()

  const handleSubmit = async (data: IOnUploadSubmit, file: File) => {
    const formData = new FormData()
    formData.append(
      'body',
      JSON.stringify({
        data,
      })
    )
    formData.append('file', file)

    const response = await fetch('/api/products', {
      method: 'POST',
      body: formData,
    })

    const uploadResult = await response.json()
    if (!uploadResult?.success) {
      const field = uploadResult.error?.keyValue?.email !== undefined ? 'Email' : 'ID'

      let message = !uploadResult.error.message ? errorHandler(uploadResult.error?.code) : uploadResult.error.message
      message += ` (${field})`
      return { ...uploadResult.error, message }
    }

    return null
  }

  return (
    <>
      <Head>
        <title>{`${t('upload.header')}`}</title>
        <meta name='description' content='You can login our Toyz shop!' />
      </Head>
      <Container color='white' width='lg'>
        <header>
          <h3>{`${t('upload.header')}`}</h3>
        </header>
        <br />
        <UploadImageForm onUploadSubmit={handleSubmit} />
      </Container>
    </>
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
