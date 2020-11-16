import {
  About,
  Intro,
  Footer,
} from '@/components/page-sections';
import Header from '@/components/header/header';
import BlogList from '@/components/blog/blogList';
import { getallBlogsForHome } from '@/lib/api';
import Head from 'next/head'

export async function getStaticProps() {
  const data = await getallBlogsForHome()

  return {
    props: { allBlogs: data.allBlogs, aboutMe: data.aboutTheAuthor }
  };
}
export default function Home({ allBlogs, aboutMe, }) {
  return (
    <>
      <Head>
        <title>TheWebUiGuy</title>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div id="home" />
      <Header />
      <div className="w-full flex-col flex">
        <Intro />
        <About aboutMe={aboutMe} />
        <BlogList blogs={allBlogs} />
        <Footer />
      </div>
    </>
  );
}
