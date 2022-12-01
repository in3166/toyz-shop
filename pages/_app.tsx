import { AppProps } from 'next/app'
import { NextPage } from 'next'

import { Provider } from 'react-redux'
import { RecoilRoot } from 'recoil'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import wrapper from '../store'
// import i18n from 'public/locale'
import { appWithTranslation } from 'next-i18next'

import Layout from 'components/_shared/layout'
import 'styles/index.scss'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useCallback, useEffect, useState } from 'react'
import localStore from 'store'
import Header from 'components/_shared/layout/Header'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from 'components/_shared/layout/ErrorFallback'
import { useRouter } from 'next/router'
import nexti18Config from 'next-i18next.config'

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnMount: false } },
})

const MyApp: NextPage<AppProps> = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest)

  const router = useRouter()
  const [locale, setLocale] = useState('en')

  const [darkMode, setDarkMode] = useState(false)
  const themeCheck = useCallback(() => {
    if (
      localStore.get('toyz.theme') === 'dark' ||
      (!('toyz.theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      localStore.set('toyz.theme', 'dark')
      setDarkMode(true)
    } else {
      localStore.set('toyz.theme', 'light')
      setDarkMode(false)
    }
  }, [])

  useEffect(() => {
    themeCheck()
    setLocale(router.locale ?? 'en')
  }, [darkMode, router.locale, themeCheck])

  useEffect(() => {
    themeCheck()
  }, [themeCheck])

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Provider store={store}>
        <RecoilRoot>
          <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <title>Toyz</title>
          </Head>
          <Layout>
            <Header lang={locale} isDark={darkMode} />
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Component {...props} />
            </ErrorBoundary>
          </Layout>
        </RecoilRoot>
      </Provider>
    </QueryClientProvider>
  )
}

export default appWithTranslation(MyApp)
