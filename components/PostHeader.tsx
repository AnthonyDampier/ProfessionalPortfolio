import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import PostTitle from 'components/PostTitle'
import type { Post } from 'lib/sanity.queries'

export default function PostHeader(
  props: Pick<Post, 'title' | 'coverImage' | 'date' | 'author' | 'slug'>
) {
  const { title, coverImage, date, author, slug } = props
  return (
    <>
    <div className='flex justify-between'>
        <div>
          <PostTitle>{title}</PostTitle>
        <div className="mb-6 text-lg text-zinc-400">
          <Date dateString={date} />
        </div>
      </div>
        
      </div>
      <div className="mb-8 sm:mx-0 md:mb-5 shadow-2xl">
        <CoverImage title={title} image={coverImage} priority slug={slug} />
      </div>
      <div className="hidden md:mb-12 md:block">
          {author && <Avatar name={author.name} picture={author.picture} />}
      </div>
    </>
  )
}
