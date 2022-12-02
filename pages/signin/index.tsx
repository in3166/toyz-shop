import { SignInIcon } from 'public/svgs'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { useSession, signIn, signOut } from 'next-auth/react'

import SignInForm from 'components/SignInForm'
import styles from './signIn.module.scss'

const SignIn = (): JSX.Element => {
  const router = useRouter()
  const { data: session } = useSession()
  if (session) {
    router.push('/')
  }

  const signInHandler = async (id: string, password: string) => {
    const res = await signIn('credentials', {
      id,
      password,
      redirect: false,
    })

    // const response = await fetch(`/api/users/${id}`, {
    //   method: 'POST',
    //   body: JSON.stringify({ id, password }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then(async (responseUser) => {
    //     const data = await responseUser.json()
    //     if (!data.success) return data.message
    //     router.push('/')
    //     return null
    //   })
    //   .catch((error) => {
    //     return error.message
    //   })
    // return response
  }

  return (
    <main className={styles.formWrapper}>
      <header className={styles.header}>
        <h3 className={styles.id}>
          <SignInIcon />
        </h3>
      </header>

      <div className={styles.content}>
        <SignInForm onSignIn={signInHandler} />
      </div>
    </main>
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

export default SignIn
