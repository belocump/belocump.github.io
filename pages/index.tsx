import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faFacebookF,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { faStar } from "@fortawesome/free-solid-svg-icons";

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
        <h1 className='font-fancy2'>coming here</h1>
        {/* <FontAwesomeIcon icon={faStar}/> */}
        <FontAwesomeIcon icon={faTwitter} />

        
       

   
      </div>

    </div>
  )
}

export default Home
