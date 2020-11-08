import Header from '@/components/header'
import { request } from "@/lib/datocms";
import About from '@/components/about'
import Testimonials from '@/components/testimonials'
import Footer from '@/components/footer'
import Clients from '@/components/clients'
import BlogList from '@/components/BlogList';
import IntroHeader from '@/components/IntroHeader';

const HOMEPAGE_QUERY = `query HomePage($limit: IntType, $skip: IntType) {
  allBlogs(first: $limit, skip: $skip, orderBy: _createdAt_DESC, filter: {_status: {eq: published}}) {
    blogTitle
    blogCategory
    blogExcerpt
    blogSlug
    published
    postThumbnail {
      responsiveImage(imgixParams: { auto: format }) {
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
    author{
      name
      picture {
        url
      }
    }
  }
  aboutTheAuthor{
    aboutMe
    aboutMeImg{
      responsiveImage(imgixParams: { auto: format }) {
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
}`

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10, skip: 0 }
  });

  const allBlogs = data.allBlogs.filter((b) => b.published);

  return {
    props: { allBlogs, aboutMe: data.aboutTheAuthor }
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
