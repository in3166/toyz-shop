import { NextPageContext } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import styles from './notFound.module.scss'

const NotFound = () => {
  return <div className={styles.notFound}>404 Not Found</div>
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

export default NotFound
