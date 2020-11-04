import Header from '@/components/header'
import { request } from "@/lib/datocms";
import About from '@/components/about'
import Testimonials from '@/components/testimonials'
import Footer from '@/components/footer'
import Clients from '@/components/clients'
import BlogList from '@/components/blogList';

const HOMEPAGE_QUERY = `query HomePage($limit: IntType) {
  allBlogs(first: $limit) {
    blogTitle
    blogExcerpt
    blogSlug
    blogCategory
    createdAt
    postThumbnail {
      responsiveImage(imgixParams: { w: 300, h: 300, auto: format }) {
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
    author: blog.author,
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
      <BlogList blogs={allBlogs}/>
      <Clients />
      <Testimonials />
      <Footer />
    </div>
  </>
  );
}
