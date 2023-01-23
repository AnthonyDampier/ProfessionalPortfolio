import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Omit<Post, '_id'>) {
  return (
    <div>
      <div className="mb-5">
      <Link href={`/posts/${slug}`} className="">
        <CoverImage
          slug={slug}
          title={title}
          image={coverImage}
          priority={false}
        />
        </Link>
      </div>
      <h3 className="mb-3 text-3xl leading-snug text-white">
        <Link href={`/posts/${slug}`} className="hover:underline decoration-1 decoration-zinc-300 underline-offset-2">
          {title}
        </Link>
      </h3>
      <Link href={`/posts/${slug}`} className="">
      <div className="mb-4 text-lg text-zinc-500">
        <Date dateString={date} />
      </div>
      {excerpt && <p className="mb-4 text-lg leading-relaxed text-white">{excerpt}</p>}
      </Link>
      {author && <Avatar name={author.name} picture={author.picture} />}
    </div>
  )
}
