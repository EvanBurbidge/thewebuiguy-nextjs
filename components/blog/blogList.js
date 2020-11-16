import BlogListItem from './BlogListItem';
import SectionHeader from '../SectionHeader';

const BlogList = ({ blogs = [] }) => {
  return (
    <div className="section-container h-auto flex flex-col pb-24" id="blogs">
      <SectionHeader title="Blogs" />
      <div className="flex flex-wrap w-full justify-start items-center px-10 py-10">
        {
          blogs.map(blog => (
            <div key={blog.blogSlug} className="w-full md:w-1/4 lg:w-1/4 px-2 mb-10 md:mb-4 lg:mb-4">
              <BlogListItem
                title={blog.blogTitle}
                excerpt={blog.blogExcerpt}
                image={blog.postThumbnail.responsiveImage}
                category={blog.blogCategory}
                slug={blog.blogSlug}
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default BlogList