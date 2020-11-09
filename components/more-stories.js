import Container from './container/Container'
import PostPreview from './post-preview'

export default function MoreStories({ posts }) {
  return (
    <Container>
      <section>
        <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight text-primaryDark">
          More Stories
      </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
          {posts.map((post) => (
            <PostPreview
              key={post.blogSlug}
              title={post.blogTitle}
              coverImage={post.postThumbnail}
              date={post.createdAt || ''}
              author={post.author || ''}
              slug={post.blogSlug}
              excerpt={post.blogExcerpt}
            />
          ))}
        </div>
      </section>
    </Container>
  )
}
