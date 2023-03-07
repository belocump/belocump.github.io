import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Belocump.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-center bg-gray-80">
        <h1>はじめまして、Belocumpです</h1>
        <br />
        <p>小学校の教員として、１０年以上働いていました。</p>
        <p>プログラミングに興味があります。最近はPythonやフロントエンドの技術の勉強をしています。</p>
        <p>サッカーを心から愛しています。</p>
        <br />
        <p>どうぞ。よろしくお願いします。</p>
      </div>

    </div>
  )
}

export default Home
