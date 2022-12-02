import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { appWithTranslation } from 'next-i18next'
import { SessionProvider } from 'next-auth/react'

import { useCallback, useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { RecoilRoot } from 'recoil'
import { ErrorBoundary } from 'react-error-boundary'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import localStore from 'store'

import wrapper from '../stores'
import Layout from 'components/layout'
import Header from 'components/layout/Header'
import ErrorFallback from 'components/layout/ErrorFallback'
import 'styles/index.scss'
import nextI18nextConfig from 'next-i18next.config'

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
    console.log('cl', router.locale)
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
          <SessionProvider session={props.session}>
            <Layout>
              <Header lang={locale} isDark={darkMode} />
              <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Component {...props} />
              </ErrorBoundary>
            </Layout>
          </SessionProvider>
        </RecoilRoot>
      </Provider>
    </QueryClientProvider>
  )
}

export default appWithTranslation(MyApp, nextI18nextConfig)
