import type { NextPage } from 'next'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { NextPageContext } from 'next/types'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { useEffect, useI18n, useState } from 'hooks'
import { IOnUploadSubmit, IProductItem } from 'types/product'
import errorHandler from 'lib/errorHandler'
import { Container, Loading } from 'components/_shared'
import UploadImageForm from 'components/UploadProudctForm'

const UpdateProudctPage: NextPage<AppProps> = () => {
  const t = useI18n()
  const router = useRouter()
  const [productInfo, setProductInfo] = useState<IProductItem | undefined>()

  useEffect(() => {
    if (router.query.id) {
      fetch(`/api/products/${router.query.id}`, { method: 'GET' }).then(async (response) => {
        const result = await response.json()
        if (result.success) {
          setProductInfo(result.product)
        }
      })
    }
  }, [router.query?.id])

  if (router?.query?.id && !productInfo) return <Loading />

  const handleSubmit = async (data: IOnUploadSubmit, imageFile?: File) => {
    const formData = new FormData()
    if (imageFile) {
      formData.append(
        'body',
        JSON.stringify({
          data,
        })
      )
      formData.append('file', imageFile)
      data.changedImage = 'yes'
    }

    let response
    if (productInfo) {
      data._id = productInfo?._id
      response = await fetch('/api/products', {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    } else {
      response = await fetch('/api/products', {
        method: 'POST',
        body: formData,
      })
    }

    const result = await response.json()
    if (!result?.success) {
      const message = !result.error.message ? errorHandler(result.error?.code) : result.error.message
      return { ...result.error, message }
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
        <UploadImageForm onUploadSubmit={handleSubmit} product={productInfo} />
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

export default UpdateProudctPage
