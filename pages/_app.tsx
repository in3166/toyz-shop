import { AppProps } from 'next/app'
import { NextPage } from 'next'

import { Provider } from 'react-redux'
import { RecoilRoot } from 'recoil'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { store } from 'states'
// import i18n from 'public/locale'
import { appWithTranslation } from 'next-i18next'

import Layout from 'components/_shared/layout/Layout'
import 'styles/index.scss'

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnMount: false } },
})

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Provider store={store}>
        <RecoilRoot>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>
      </Provider>
    </QueryClientProvider>
  )
}

export default appWithTranslation(MyApp)
