import Container from 'components/BlogContainer'
import Layout from 'components/BlogLayout'
import Header from 'components/BlogHeader'
import About from 'components/About';
import HeroPost from 'components/HeroPost'
import MoreStories from 'components/MorePosts'
import IntroTemplate from 'intro-template'
import * as demo from 'lib/demo.data'
import type { Post, Settings } from 'lib/sanity.queries'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings
}

export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, posts, settings } = props
  // const [heroPost, ...morePosts] = posts || [];
  const receivedPosts = posts || [];
  const { title = demo.title, description = demo.description } = settings || {}

  return (
    <>
      <Layout preview={preview} loading={loading}>
        <Container>
          {/* Header  is a title and nav */}
          <Header title={title} description={description} level={1} />
        <Container>
        <Container>
          <About />
        </Container>
        </Container>
          {/* {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )} */}
          {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
          {receivedPosts.length > 0 && <MoreStories posts={receivedPosts} />}
        </Container>
        {/* provides the admin with easier access to source */}
        {/* <IntroTemplate /> */}
      </Layout>
    </>
  )
}
