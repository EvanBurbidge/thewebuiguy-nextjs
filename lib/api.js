const API_URL = 'https://graphql.datocms.com'
const API_TOKEN = process.env.DATOCMS_API_TOKEN

// See: https://www.datocms.com/blog/offer-responsive-progressive-lqip-images-in-2020
const responsiveImageFragment = `
  fragment responsiveImageFragment on ResponsiveImage {
    srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    bgColor
    base64
  }
`

async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getPreviewPostBySlug(slug) {
  const data = await fetchAPI(
    `
    query PostBySlug($slug: String) {
      blog(filter: {slug: {eq: $slug}}) {
        slug
      }
    }`,
    {
      preview: true,
      variables: {
        slug,
      },
    }
  )
  return data?.post
}

export async function getallBlogsWithSlug() {
  const data = fetchAPI(`
    {
      allBlogs {
        blogSlug
      }
    }
  `)
  return data?.allBlogs
}

export async function getallBlogsForHome() {
  const data = await fetchAPI(
    `
    {
      aboutTheAuthor{
        aboutMe
        aboutMeImg{
          responsiveImage(imgixParams: { auto: format }) {
            ...responsiveImageFragment
          }
        }
      }

      allBlogs( first: 20) {
        blogTitle
        blogSlug
        blogExcerpt
        createdAt
        published
        blogCategory
        postThumbnail {
          responsiveImage() {
            ...responsiveImageFragment
          }
        }
        author {
          name
          picture {
            url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
          }
        }
      }
    }
    ${responsiveImageFragment}
  `
  )
  return data;
}

export async function getPostAndMorePosts(slug) {
  const data = await fetchAPI(
    `query Blog($slug: String) {
      blog(filter:{ blogSlug:{eq:$slug }, published: { eq: true } } ) {
        blogTitle
        blogContent
        createdAt
        blogSlug
        postThumbnail {
          url
          responsiveImage {
            ...responsiveImageFragment
          }
        }
        
        author {
          name
          picture {
            url
            responsiveImage {
              ...responsiveImageFragment
            }
          }
        }
      }
      morePosts: allBlogs(first: 2, filter: {blogSlug: {neq: $slug}, published: { eq: true }}) {
        blogTitle
        createdAt
        blogSlug
        blogExcerpt
        postThumbnail {
          url
          responsiveImage {
            ...responsiveImageFragment
          }
        }
        author {
          name
          picture {
            url(imgixParams: {sat: -100})
            responsiveImage {
              ...responsiveImageFragment
            }
          }
        }
      }
    }

  ${responsiveImageFragment}
  `,
    {
      variables: {
        slug,
      },
    }
  )
  return data
}
