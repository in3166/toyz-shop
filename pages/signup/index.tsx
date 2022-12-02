import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { SignUpIcon } from 'public/svgs'
import styles from './signUp.module.scss'
import SignUpForm from 'components/SignUpForm'
import { IUser } from 'types/user'

const SignUp: NextPage = () => {
  const router = useRouter()

  const addUserHandler = async (enteredUserData: IUser) => {
    enteredUserData.likes = []

    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(enteredUserData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(async (responseUser) => {
        const data = await responseUser.json()
        if (!data.success) return data.message
        router.push('/')
        return null
      })
      .catch((error) => {
        return error.message
      })
    return response
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

export const getStaticProps = async ({ locale, locales }: { locale: string; locales: string[] }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      locales,
    },
  }
}

export default SignUp
