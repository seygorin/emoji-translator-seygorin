import Head from 'next/head'
import type {PropsWithChildren} from 'react'

export function Layout({children}: PropsWithChildren) {
  return (
    <>
      <Head>
        <title>Emoji Translator</title>
        <meta
          name='description'
          content='This is a simple emoji translator based on ChatGPT 3.5.'
        />
        <link rel='icon' href='favicon.ico' />
      </Head>
      <main>{children}</main>
    </>
  )
}
