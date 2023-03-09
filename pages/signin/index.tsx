import Head from 'next/head';
import { signIn } from 'next-auth/react';
import { NextPageContext } from 'next/types';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { IMongooseError } from 'types/mongo';
import errorHandler from 'lib/errorHandler';
import SignInForm from 'components/SignInForm';
import styles from './signIn.module.scss';
import { SignInIcon } from 'public/svgs';
import { useRouter } from 'next/router';

const SignIn = (): JSX.Element => {
  const router = useRouter();
  const signInHandler = async (id: string, password: string, type?: string): Promise<IMongooseError | null> => {
    try {
      if (type !== 'credentials') {
        await signIn(type, { callbackUrl: '/' });
        return null;
      }

      const response = await signIn('credentials', {
        id,
        password,
        redirect: false,
      });
      if (response?.error) {
        const message = errorHandler(Number(response?.error));
        return { code: Number(response?.error), message, name: 'sign in error' };
      }
      router.push('/');
      return null;
    } catch (error) {
      return { code: Number(error), name: 'sign in error' };
    }
  };

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
      </main>
    </>
  );
};

export const getStaticProps = async (context: NextPageContext) => {
  const { locale, locales } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale || 'ko', ['common'])),
      locales,
    },
  };
};

export default SignIn;
