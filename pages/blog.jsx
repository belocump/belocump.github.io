// import type { NextPage } from 'next'
// import Head from 'next/head'
import Link from "next/link";
import React from 'react'
import { client } from "../libs/client";

//SSG
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  // console.log(data);
  return {
    props: {
      blog: data.contents,
    },
  };
};

const Blog = ({blog}) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
  
  {blog.map((blog) => (
        <li key={blog.id}>
          <Link href={`blog/${blog.id}`}>
            <p>{blog.title}</p>
          </Link>
        </li>
      ))}

    </div>
  )
}

export default Blog
