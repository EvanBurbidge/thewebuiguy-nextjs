import Container from '@/components/container'
import MoreStories from '@/components/more-stories'
import HeroPost from '@/components/hero-post'
import Intro from '@/components/intro'
import Layout from '@/components/layout'
import Header from '@/components/header'
import Head from 'next/head'
import { CMS_NAME } from '@/lib/constants'
import { request } from "@/lib/datocms";
import About from '@/components/about'
import BlogList from '@/components/blogList'
import Testimonials from '@/components/testimonials'
import Footer from '@/components/footer'
import Clients from '@/components/clients'

const HOMEPAGE_QUERY = `query HomePage($limit: IntType) {
  allBlogs(first: $limit) {
    blogTitle
    blogExcerpt
    blogSlug
    blogCategory
    createdAt
    postThumbnail {
      url
    }
    blogAuthor
    authorThumbnail {
      responsiveImage{
        url
        src
        srcSet
      }
    }
  }
}`;

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 }
  });
  const allBlogs = data.allBlogs.map((blog) => ({
    ...blog,
    coverImage: blog.postThumbnail,
    title: blog.blogTitle,
    excerpt: blog.blogExcerpt,
    slug: blog.blogSlug,
    author: {
      name: blog.blogAuthor,
      picture: blog.authorThumbnail
    },
    createdAt: blog.createdAt,
    category: blog.blogCategory,
  }));
  return {
    props: { allBlogs }
  };
}
export default function Home({ allBlogs }) {
  return (
  <>
    <div id="home" />
    <Header />
    <div className="w-full flex-col flex">
      <About />
      <MoreStories posts={allBlogs} />
      <Clients />
      <Testimonials />
      <Footer />
    </div>
  </>
  );
}
