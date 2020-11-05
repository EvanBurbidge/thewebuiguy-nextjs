import Header from '@/components/header'
import { request } from "@/lib/datocms";
import About from '@/components/about'
import Testimonials from '@/components/testimonials'
import Footer from '@/components/footer'
import Clients from '@/components/clients'
import BlogList from '@/components/blogList';

const HOMEPAGE_QUERY = `query HomePage($limit: IntType) {
  allBlogs(first: $limit, orderBy: _createdAt_DESC, filter: {_status: {eq: published}}) {
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
}`
export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 }
  });

  const allBlogs = data.allBlogs.filter((b) => b.published);

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
      <BlogList blogs={allBlogs}/>
      <Clients />
      <Testimonials />
      <Footer />
    </div>
  </>
  );
}
