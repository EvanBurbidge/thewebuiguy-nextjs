import { Image } from "react-datocms";
import Link from 'next/link';

const BlogListItem = ({
  title = '',
  excerpt = '',
  category = '',
  slug = '',
  image = {},
}) => (
    <div className="max-w-sm rounded overflow-hidden shadow-lg w-full">
      <div className="h-56 border-b border-gray-300 overflow-hidden w-full bg-white">
        <Image data={image} className="w-full h-full" />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 hover:underline">
          <Link href={`posts/${slug}`}>
            {title}
          </Link>
        </div>
        <p className="text-gray-700 text-base">
          {excerpt}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{category}</span>
      </div>
    </div>
  )

export default BlogListItem