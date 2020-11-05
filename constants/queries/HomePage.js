export const HOMEPAGE_QUERY = `query HomePage($limit: IntType) {
  allBlogs(first: $limit, orderBy: _createdAt_DESC, filter: {_status: {eq: published}}) {
    blogTitle
    blogCategory
    blogExcerpt
    blogSlug
    published
    postThumbnail {
      responsiveImage(imgixParams: { auto: format, height: 350, fit: crop }) {
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
}`;