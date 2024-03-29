import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Pagination from "../../../../../components/Pagination/Pagination";
import SinglePost from "../../../../../components/Post/SinglePost";
import Tag from "../../../../../components/Tag/Tag";
import {
  getAllPosts,
  getAllTags,
  getNumberOfPages,
  getNumberOfPagesByTag,
  getPostsByPage,
  getPostsByTagAndPage,
  getPostsForTopPage,
} from "../../../../../libs/notionAPI";

export const getStaticPaths: GetStaticPaths = async () => {
  const allTags = await getAllTags();
  let params: any = [];

  await Promise.all(
    allTags.map((tag: string) => {
      return getNumberOfPagesByTag(tag).then((numberOfPagesByTag: number) => {
        for (let i = 1; i <= numberOfPagesByTag; i++) {
          params.push({ params: { tag: tag, page: i.toString() } });
        }
      });
    })
  );

  // console.log(params);

  return {
    paths: params,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const currentPage: string = context.params?.page.toString();
  const currentTag: string = context.params?.tag.toString();

  const upperCaseCurrentTag =
    currentTag.charAt(0).toUpperCase() + currentTag.slice(1);

  const posts = await getPostsByTagAndPage(
    upperCaseCurrentTag,
    parseInt(currentPage, 10)
  );

  const numberOfPagesByTag = await getNumberOfPagesByTag(upperCaseCurrentTag);

  const allTags = await getAllTags();

  return {
    props: {
      posts,
      numberOfPagesByTag,
      currentTag,
      allTags,
    },
    revalidate: 60 * 60 * 6,
  };
};

const BlogTagPageList = ({
  numberOfPagesByTag,
  posts,
  currentTag,
  allTags,
}: any) => {
  return (
    <div className="container h-full w-full mx-auto">
      <Head>
        <title>Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container w-full mt-16">
        <h1 className="font-fancy1 text-5xl font-medium text-center mb-16">
          {currentTag}
        </h1>

        <section className="sm:grid grid-cols-2 w-5/6 gap-3 mx-auto">
          {posts.map((post: any) => (
            <div key={post.id}>
              <SinglePost
                title={post.title}
                description={post.description}
                date={post.date}
                tags={post.tags}
                slug={post.slug}
                isPaginationPage={true}
              />
            </div>
          ))}
        </section>
        <Pagination numberOfPage={numberOfPagesByTag} tag={currentTag} />
        <Tag tags={allTags} />
      </main>
    </div>
  );
};

export default BlogTagPageList;
