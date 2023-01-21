import Container from 'components/BlogContainer'
import BlogHeader from "./BlogHeader";
import HeroPost from "./HeroPost";
import MoreStories from "./MoreStories";
import * as demo from 'lib/demo.data'


export default function BlogPage(props: { preview: any; loading: any; posts: any; settings: any; }){

    const { preview, loading, posts, settings } = props;
    const [heroPost, ...morePosts] = posts || []
    const { title = demo.title, description = demo.description } = settings || {}

    return(
        <Container >
            <div className="mx-auto w-4/6">
                <BlogHeader title={title} description={description} level={1}/>
                {heroPost && (
                    <HeroPost
                    title={heroPost.title}
                    coverImage={heroPost.coverImage}
                    date={heroPost.date}
                    author={heroPost.author}
                    slug={heroPost.slug}
                    excerpt={heroPost.excerpt}
                    />
                )}
                {morePosts.length > 0 && <MoreStories posts={morePosts} />}
            </div>
        </Container>
    )
    
}