import PostPreview from 'components/PostPreview'
import type { Post } from 'lib/sanity.queries'

export default function MoreStories({ posts }: { posts: Post[] }) {
  return (
    <section id='blog'>
      <h4 className='font-semibold  text-white leading-tight tracking-tighter md:text-4l text-6xl mb-20 text-center'>
        <span className="z-10 drop-shadow-lg shadow-black font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-pink-500 ">
        &nbsp;Lessons learned&nbsp;
        </span>
        &nbsp;
        &
        &nbsp;
        <span className="z-10 drop-shadow-lg shadow-black font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 ">
        &nbsp;experience gained&nbsp;
        </span>
        .
      </h4>
      <div className="pb-20 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        {posts.map((post) => (
          <PostPreview
            key={post._id}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
