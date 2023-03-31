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
  const fourPosts = await getPostsForTopPage();
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

<h1 className="text-5xl font-medium text-center mb-16">
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
  )
}

export default Home
