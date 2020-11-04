import { Image } from 'react-datocms'
import Link from 'next/link'

const BlogList = ({ blogs = [] }) => (
  <div className="flex flex-wrap w-full justify-between items-center px-10 py-10" id="blogs">
    {
        blogs.map(blog => (
          <div key={blog.slug} className=" w-1/4 px-2">
            <Image data={blog.coverImage.responsiveImage} className="border-b border-gray-500 pb-1"/>
            <h3 class="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 hover:underline">
              <Link href={`/posts/${blog.blogSlug}`}>{blog.blogTitle}</Link>
            </h3>
            <p className="text-md font-light">
              {blog.excerpt}
            </p>
          </div>
        ))
      }
  </div>
)

export default BlogList