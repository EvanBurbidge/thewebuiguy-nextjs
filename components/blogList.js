import BlogListItem from './BlogListItem';
import SectionHeader from './SectionHeader';

const BlogList = ({ blogs = [] }) => (
  <div class="section-container flex flex-col mb-24">
    <SectionHeader title="Blogs" />
    <div className="flex flex-wrap w-full justify-between items-center px-10 py-10" id="blogs">
      {
        blogs.map(blog => (
          <div key={blog.blogSlug} className=" w-1/4 px-2">
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