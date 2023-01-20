/* eslint-disable react/jsx-props-no-spreading */
import queryClient from 'main/lib/react-query'
import type { AppProps } from 'next/app'

import Head from 'next/head'
import { FC } from 'react'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title />
    </Head>
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  </>
)

export default MyApp
