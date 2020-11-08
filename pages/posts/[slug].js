import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { request } from "@/lib/datocms";
import Container from '@/components/container/Container'
import Header from '@/components/blogHeader';
import PostBody from '@/components/post-body'
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

const BlogQuery = `
query Blog($slug: String) {
  blog(filter:{ blogSlug:{eq:$slug } } ) {
    blogTitle
    blogContent
    createdAt
    postThumbnail {
      url
      responsiveImage {
        srcSet
        webpSrcSet
        sizes
        src
        width
        height
        aspectRatio
        alt
        title
        base64
      }
    }
    author {
      name
      picture {
        responsiveImage {
          srcSet
        webpSrcSet
        sizes
        src
        width
        height
        aspectRatio
        alt
        title
        base64
        }
      }
    }
  }
}
`


export default function Post({ blog, slug, content }) {
  const router = useRouter()
  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
    <Header className="mb-64"/>
    <Container>
      <article className="mt-32">
        <Head>
          <title>
            {blog.blogTitle} | Next.js Blog Example with {CMS_NAME}
          </title>
          <meta property="og:image" content={blog.postThumbnail.url} />
        </Head>
        <PostHeader
          title={blog.blogTitle}
          coverImage={blog.postThumbnail}
          date={blog.createdAt}
          author={blog.author}
        />
        <PostBody content={content} blogContent={blog.blogContent}/>
      </article>
      <SectionSeparator />
    </Container>
    </>
  )
}

export async function getStaticProps({ params }) {
  const data = await request({
    query: BlogQuery,
    variables: { slug: params.slug }
  });
  const content = await markdownToHtml(data.blog.blogContent);
  return {
    props: {
      content,
      blog: data.blog,
      slug: params.slug,
    }
  };
}

export async function getStaticPaths() {
  const data = await request({
    query: ALL_BLOGS
  });
  return {
    paths: data.allBlogs.map((blog) => `/posts/${blog.blogSlug}`) || [],
    fallback: true,
  }
}
