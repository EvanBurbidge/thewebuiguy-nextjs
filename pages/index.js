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

const HOMEPAGE_QUERY = `query HomePage($limit: IntType) {
  allBlogs(first: $limit) {
    blogTitle
  }
}`;

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 }
  });
  return {
    props: { data }
  };
}
export default function Home({ data }) {
  return (
  <>
    <Header />
    <div className="w-full flex-col flex">
      <About />
      <BlogList />
      <Testimonials />
    </div>
  </>
  );
}
