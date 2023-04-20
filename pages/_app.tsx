import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/layout/Layout'
import CreateCompanyModal from '@/components/modals/CreateCompanyModal'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      {/* <CreateCompanyModal /> */}
      <Component {...pageProps} />
    </Layout>
  )
}
