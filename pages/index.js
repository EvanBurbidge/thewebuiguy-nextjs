import Header from '@/components/header'
import About from '@/components/about'
import Footer from '@/components/footer'
import BlogList from '@/components/blogList';
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
      <Footer />
    </div>
  </>
  );
}
