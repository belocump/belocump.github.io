import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Belocump.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col bg-gray-80">
        <h1 className='font-fancy2 text-3xl items-center'>Belocumpです</h1>
        <br />
        <p className='font-fancy2 text-3xl justify-center'>小学校の教員として、１０年以上働いていました。プログラミングに興味があります。最近はPythonやフロントエンドの技術の勉強をしています。サッカーを心から愛しています。</p>
        <br />
        <br/>
        <h1 className='font-fancy1 text-6xl'>MyInterest</h1>
        <br/><br/>
        <Image
        src="/interest.png"
        alt=""
        width={1500}
        height={1500}
        />
      </div>

    </div>
  )
}

export default Home
