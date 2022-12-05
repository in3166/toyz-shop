import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { NextPageContext } from 'next/types'
import { signIn } from 'next-auth/react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import errorHandler from 'lib/errorHandler'
import { IUser } from 'types/user'
import SignUpForm from 'components/SignUpForm'
import { SignUpIcon } from 'public/svgs'
import styles from './signUp.module.scss'

const SignUp: NextPage = () => {
  const router = useRouter()

  const addUserHandler = async (enteredUserData: IUser) => {
    enteredUserData.likes = []
    try {
      const response = await fetch('/api/users', {
        method: 'PUT',
        body: JSON.stringify(enteredUserData),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const signUpResult = await response.json()
      if (!signUpResult.success) {
        const message = !signUpResult.error.message
          ? errorHandler(signUpResult.error?.code)
          : signUpResult.error.message
        return { ...signUpResult.error, message }
      }

      const responseSignin = await signIn('credentials', {
        id: enteredUserData.id,
        password: enteredUserData.password,
        redirect: false,
      })

      if (!responseSignin?.ok) {
        return new Error(responseSignin?.error)
      }
      router.push('/')
      return null
    } catch (error) {
      return error
    }
  }

  return (
    <>
      <Head>
        <title>Add a New User</title>
        <meta name='description' content='You can join our Toyz shop!' />
      </Head>
      <main className={styles.formWrapper}>
        <header className={styles.header}>
          <h3 className={styles.id}>
            <SignUpIcon />
          </h3>
        </header>

        <div className={styles.content}>
          <SignUpForm onAddUser={addUserHandler} />
        </div>
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

export default SignUp