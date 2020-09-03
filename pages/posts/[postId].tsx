import { useRouter } from 'next/router'
import { ContentWrapper } from '../posts' 
import { getPostById } from '../../utils/api'
export default function Post({ post }){
        return (
            <ContentWrapper>
                <h1>Post {post.title}</h1>
                <p>{post.body}</p>
            </ContentWrapper>                  
        )
        
}

Post.getInitialProps = async (ctx) => {
    const post = await getPostById(ctx.query.postId)
    return {
      post
    }
}
