import BlogListItem from './BlogListItem';
import SectionHeader from './SectionHeader';

const BlogList = ({ blogs = [] }) => (
  <div className="section-container h-auto flex flex-col pb-24" id="blogs">
    <SectionHeader title="Blogs" />
    <div className="flex flex-wrap w-full justify-between items-center px-10 py-10">
      {
        blogs.map(blog => (
          <div key={blog.blogSlug} className="w-full md:w-1/4 lg:w-1/4 px-2 mb-6 md:mb-0 lg:mb-0">
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

export default BlogList