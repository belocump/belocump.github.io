import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { getAllTags ,getPostsForTopPage} from '../libs/notionAPI'
import SinglePost from '../components/Post/SinglePost'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import Tag from '../components/Tag/Tag'

export const getStaticProps:GetStaticProps = async () => {
  // const allPosts = await getAllPosts();
  // 空だと４つの記事　数字で指定することで記事の数が変わる
  const fourPosts = await getPostsForTopPage(2);
  const allTags = await getAllTags();

return{
  props:{
    fourPosts,
    allTags,
  },
  revalidate:60*60*24,
  };
};



const Home: NextPage = ({fourPosts,allTags}:any) => {
  return (
    <>
    <Head>
        <title>Belocump.com</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>

    <section className="container flex flex-col min-h-screen content-between justify-between mx-auto md:flex-row">

      <div className="bg-gray-300 flex container  flex-col">

        <div className='m-10'>
          <h1 className='font-fancy1 font-medium text-center text-5xl mt-5 mb-5'>Belocumpです</h1>
        
          <p className='font-fancy2 text-3xl mt-10'>小学校の教員として、１０年以上働いていました。プログラミングに興味があります。最近はPythonやフロントエンドの技術の勉強をしています。サッカーを心から愛しています。</p>

          <div className='flex justify-center'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white mt-10 font-bold py-2 px-4 rounded">
            ・・・もっと詳しく
            </button>
          </div>
          
      
        </div>

        <div>
          <h1 className="font-fancy1 text-5xl font-medium text-center mb-5">
            News
          </h1>
          {fourPosts.map((post:any) => (
            <div className="mx-4" key={post.id}>
              <SinglePost
                title={post.title}
                description={post.description}
                date={post.date}
                tags={post.tags}
                slug={post.slug}
                isPaginationPage={false}
              />
            </div>
          ))}
          <Link
            href="/posts/page/1"
            className="mb-6 lg:w-1/2 mx-auto px-5 block text-right"
          >
            ...もっと見る
          </Link>
          <Tag tags={allTags} />
        </div>

      </div>

      <div className="bg-blue-300 flex container p-10 flex-col items-center">
        <div>
        <h1 className='font-fancy1 text-6xl text-center'>MyInterest</h1>
        <br/>
        <Image
        src="/interest.png"
        alt=""
        width={500}
        height={1000}
        />
        </div>
      </div>

    </section>

    </>
  )
}

export default Home
