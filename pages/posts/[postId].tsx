import { useRouter } from 'next/router'

export default function Post({ post }){
        return (
            <div>
                <h1>Post {post.title}</h1>
                <p>{post.body}</p>
            </div>
                    
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
