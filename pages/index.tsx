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

      <div className="flex flex-col items-center justify-center bg-gray-80">
        <h1 className='font-fancy1'>はじめまして、Belocumpです</h1>
        <br />
        <p className='font-fancy1'>小学校の教員として、１０年以上働いていました。</p>
        <p className='font-fancy2'>プログラミングに興味があります。最近はPythonやフロントエンドの技術の勉強をしています。</p>
        <p className='font-fancy3'>サッカーを心から愛しています。</p>
        <br />
        <p>どうぞ。よろしくお願いします。</p>
        <h1 className='font-fancy2'>MyInterest</h1>
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
