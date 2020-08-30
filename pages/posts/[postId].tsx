import { useRouter } from 'next/router'
export default function Post({ post }){
        console.log('kekw'+post)
        return (
            <div>
                {/* <h1>Post {post.title}</h1>
                <p>{post.body}</p> */}
            </div>
                    
        )
        
}


// export async function getStaticProps(ctx) {
//     const response = await fetch('https://simple-blog-api.crew.red/posts/' +ctx.query.postId);
//     const post = await response.json();
//     return {
//       props: {
//         post,
//       }
//     }
//   }

//   Post.getInitialProps = async (ctx) => {
//       debugger
//     console.log('kek'+ctx)
//     const response = await fetch('https://simple-blog-api.crew.red/posts/' + ctx.query.postId);
//     const post = await response.json();
//     console.log(post)
//     return {
//       props: {
//         post
//       }
//     }
//   }