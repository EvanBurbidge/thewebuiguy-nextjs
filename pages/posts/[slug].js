import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '@/components/container/Container'
import Header from '@/components/blogHeader';
import PostBody from '@/components/post-body'
import PostHeader from '@/components/post-header'
import SectionSeparator from '@/components/section-separator'
import Head from 'next/head'
import markdownToHtml from '@/lib/markdownToHtml'
import { getallBlogsWithSlug, getPostAndMorePosts } from '@/lib/api'
import MoreStories from '@/components/more-stories'
import Footer from '@/components/footer';


export default function Post({ blog, morePosts = [], content = '' }) {
  const router = useRouter()
  if (!router.isFallback && !blog.blogSlug) {
    return <ErrorPage statusCode={404} />
  }
  if (!blog) return null;
  return (
    <>
      <Header className="mb-64" />
      <Container>
        <article className="mt-32">
        <Head>
            <title>
              {blog.blogTitle}
            </title>
            <link rel="shortcut icon" href="/favicon/favicon.ico" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
          <PostHeader
            title={blog.blogTitle}
            coverImage={blog.postThumbnail}
            date={blog.createdAt}
            author={blog.author}
          />
          <PostBody content={content} blogContent={blog.blogContent} />
        </article>
        <SectionSeparator />
      </Container>
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      <Footer />
    </>
  )
}


export async function getStaticProps({ params }) {
  const data = await getPostAndMorePosts(params.slug)
  const content = await markdownToHtml(data?.blog?.blogContent || '');
  return {
    props: {
      content,
      blog: data.blog,
      slug: params.slug,
      morePosts: data.morePosts,
    }
  }
}

export async function getStaticPaths() {
  const allPosts = await getallBlogsWithSlug();
  return {
    paths: allPosts?.map((post) => `/posts/${post.blogSlug}`) || [],
    fallback: true,
  }
}