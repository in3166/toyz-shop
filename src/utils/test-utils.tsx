import React, { PropsWithChildren } from 'react'
import type { RenderOptions } from '@testing-library/react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import type { PreloadedState } from '@reduxjs/toolkit'
import { ErrorBoundary } from 'react-error-boundary'
import { Provider } from 'react-redux'
import { RecoilRoot } from 'recoil'

import type { AppStore, RootState } from 'stores'
import productsReducer from 'stores/reducer/product'
import bannerReducer from 'stores/reducer/banner'
import systemReducer from 'stores/reducer/system'
import ErrorFallback from 'components/layout/ErrorFallback'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: { product: productsReducer, banner: bannerReducer, system: systemReducer },
      devTools: process.env.NODE_ENV !== 'production',
      middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return (
      <Provider store={store}>
        <RecoilRoot>
          <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
        </RecoilRoot>
      </Provider>
    )
  }

  return { store, ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }) }
}

export * from '@testing-library/react'
