import Container from 'components/BlogContainer'
import Header from 'components/BlogHeader'
import Layout from 'components/BlogLayout'
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
          <h4>
          Hello, my name is Anthony Dampier, and I am a Full Stack Application Developer with 1
          years of experience in the software engineering field. 
          </h4>
          <p>
          My expertise lies in developing web and mobile applications, utilizing a variety of technologies such as 
          <b>JavaScript, TypeScript, HTML, & CSS</b>. I have a strong understanding of web development frameworks such as 
          <b> Next.js (early adopter), and React</b>, as well as experience with back-end frameworks like Express.js, node.
          </p> 
          <p>
          I am also well-versed in database management systems such as <b>PostgresSQL, MySQL and Sanity</b>. 
          In addition, I am skilled in version control using Git, Agile methodologies and Scrum.
          </p>
          <hr/>
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
