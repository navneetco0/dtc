import { Navbar } from '@/components/Home/Navbar'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>Direct To Customer Benifits</title>
        <meta name="description" content="direct to customer benefits" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <Navbar />
      </main>
    </>
  )
}
