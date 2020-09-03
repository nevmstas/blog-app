import { useRouter } from 'next/router'
import { ContentWrapper } from '../posts' 
export default function Post({ post }){
        return (
            <ContentWrapper>
                <h1>Post {post.title}</h1>
                <p>{post.body}</p>
            </ContentWrapper>                  
        )
        
}

Post.getInitialProps = async (ctx) => {
    const response = await fetch('https://simple-blog-api.crew.red/posts/' + ctx.query.postId);
    const post = await response.json();
    console.log(post)
    return {
      post
    }
}
