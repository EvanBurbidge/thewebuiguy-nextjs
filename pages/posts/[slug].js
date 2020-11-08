import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { request } from "@/lib/datocms";
// import Container from '@/components/container'
import PostBody from '@/components/post-body'

import Header from '@/components/header'
import PostHeader from '@/components/post-header'
import SectionSeparator from '@/components/section-separator'
import Layout from '@/components/layout'
import PostTitle from '@/components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '@/lib/constants'
import markdownToHtml from '@/lib/markdownToHtml'

const ALL_BLOGS = `{
  allBlogs {
    blogSlug
  }
}`

const POST_QUERY = `query PostQuery($slug) {
  blog( filter: { blogSlug: { eq: $slug } } ) {
    blogTitle
  }
}`


export default function Post({ data }) {
  const router = useRouter()
  if (!router.isFallback && !data?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
      {JSON.stringify(data)}
    </>
  )
}

export async function getStaticProps({ params }) {
  console.log('*******************');
  console.log(params.slug);
  console.log('*******************');
  const data = await request({
    query: POST_QUERY,
    variables: { slug: params.slug }
  });
  console.log(data);
  return {
    props: { data }
  };
}

export async function getStaticPaths() {
  const data = await request({
    query: ALL_BLOGS
  });
  console.log('*********DATA**********');
  console.log(data);
  return {
    paths: data.allBlogs.map((post) => `/posts/${post.blogSlug}`) || [],
    fallback: true,
  }
}
