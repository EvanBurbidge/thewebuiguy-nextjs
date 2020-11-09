import Header from '@/components/header'
import { request } from "@/lib/datocms";
import About from '@/components/about'
import Testimonials from '@/components/testimonials'
import Footer from '@/components/footer'
import Clients from '@/components/clients'
import BlogList from '@/components/BlogList';
import IntroHeader from '@/components/IntroHeader';
import { getallBlogsForHome } from '@/lib/api';

export async function getStaticProps() {
  const data = await getallBlogsForHome()

  return {
    props: { allBlogs: data.allBlogs, aboutMe: data.aboutTheAuthor }
  };
}
export default function Home({ allBlogs, aboutMe, }) {
  return (
  <>
    <div id="home" />
    <Header />
    <div className="w-full flex-col flex">
      <IntroHeader />
      <About aboutMe={aboutMe}/>
      <BlogList blogs={allBlogs}/>
      {/* <Clients /> */}
      {/* <Testimonials /> */}
      <Footer />
    </div>
  </>
  );
}
