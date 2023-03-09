import { useCallback, useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';
import { RecoilRoot } from 'recoil';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { appWithTranslation, useTranslation } from 'next-i18next';
import nextI18nextConfig from 'next-i18next.config';
import localStore from 'store';

import SocketsProvider from './chatRooms/useSocekt';
import wrapper from 'stores';
import Layout from 'components/layout';
import 'styles/index.scss';

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnMount: false } },
});

const MyApp: NextPage<AppProps> = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { t } = useTranslation();

  const LANGUAGE_LIST = [t('language.first'), t('language.second')];

  const [darkMode, setDarkMode] = useState(false);
  const themeCheck = useCallback(() => {
    if (
      localStore.get('toyz.theme') === 'dark' ||
      (!('toyz.theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      localStore.set('toyz.theme', 'dark');
      setDarkMode(true);
    } else {
      localStore.set('toyz.theme', 'light');
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    themeCheck();
  }, [darkMode, themeCheck]);

  useEffect(() => {
    themeCheck();
  }, [themeCheck]);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Provider store={store}>
        <RecoilRoot>
          <SessionProvider session={props.session}>
            <Layout languageList={LANGUAGE_LIST} isDark={darkMode}>
              <Component {...props} />
            </Layout>
          </SessionProvider>
        </RecoilRoot>
      </Provider>
    </QueryClientProvider>
  );
};

export default appWithTranslation(MyApp, nextI18nextConfig);
