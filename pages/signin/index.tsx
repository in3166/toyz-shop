import { SignInIcon } from 'public/svgs'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import { NextPageContext } from 'next/types'
import { signIn } from 'next-auth/react'

import SignInForm from 'components/SignInForm'

import styles from './signIn.module.scss'
import { IMongooseError } from 'types/mongo'
import errorHandler from 'lib/errorHandler'
import { FormEvent } from 'react'

const SignIn = (): JSX.Element => {
  const router = useRouter()

  const signInHandler = async (id: string, password: string, e: FormEvent): Promise<IMongooseError | null> => {
    e.preventDefault()
    try {
      const response = await signIn('credentials', {
        id,
        password,
        redirect: false,
      })
      if (!response?.ok) {
        const message = errorHandler(Number(response?.error))
        return { code: Number(response?.error), message, name: 'sign in error' }
      }

      router.push('/')
      return null
    } catch (error) {
      return { code: Number(error), name: 'sign in error' }
    }
  }

  return (
    <>
      <Head>
        <title>Sign In</title>
        <meta name='description' content='You can login our Toyz shop!' />
      </Head>
      <main className={styles.formWrapper}>
        <header className={styles.header}>
          <h3 className={styles.id}>
            <SignInIcon />
          </h3>
        </header>

        <div className={styles.content}>
          <SignInForm onSignIn={signInHandler} />
        </div>
        <footer className={styles.siginInFooter}>
          <button type='button' onClick={() => signIn('kakao', { callbackUrl: '/' })}>
            <Image width={30} height={30} src='/svgs/kakaotalk_logo.png' alt='kakao login icon' />
          </button>
          <button type='button' onClick={() => signIn('naver', { callbackUrl: '/' })}>
            <Image width={30} height={30} src='/svgs/naver_icon.png' alt='naver login icon' />
          </button>
          <button type='button' onClick={() => signIn('google', { callbackUrl: '/' })}>
            <Image width={27} height={27} src='/svgs/google_icon.png' alt='google login icon' />
          </button>
        </footer>
      </main>
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

export default SignIn
