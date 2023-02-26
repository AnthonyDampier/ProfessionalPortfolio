// import Container from 'components/BlogContainer'
// import BlogHeader from 'components/BlogHeader'
import { Container } from '@sanity/ui'
import Layout from 'components/BlogLayout'
import Header from 'components/Header'
import { useRouter } from 'next/router'


// import HeroPost from 'components/HeroPost'
// import MoreStories from 'components/MoreStories'
// import IntroTemplate from 'intro-template'
import * as demo from 'lib/demo.data';
import type { Post, Settings } from 'lib/sanity.queries';
import About from './About';
import BlogPage from './BlogPage';
import MoreStories from "./MoreStories";
import Projects from './Projects';

export interface BlogPageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings
}

export default function IndexPage(props: BlogPageProps) {
  const { preview, loading, posts, settings } = props
  const [heroPost, ...morePosts] = posts || []
  const { title = demo.title, description = demo.description } = settings || {}

  const whatPage = "";

  const page = () => {

  }

  return (

      <Layout preview={preview} loading={loading}>
        {/* Navigation goes here */}
        <div className="mx-36">
          <Header posts={posts}/>
          <div className=''>
          <About/>
          <Projects/>
          {posts.length > 0 && 
            <MoreStories posts={posts} />
          }
          </div>
          {/* <BlogPage preview={preview} loading={loading} posts={posts} settings={settings}/> */}
          <h4 className='flex justify-center text-xl tracking-wider underline decoration-1 font-light text-zinc-300 pb-10 pt-20'>
            Built using Next.js & Sanity
          </h4>
        </div>
      </Layout>

  )
}
