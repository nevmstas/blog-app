import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPosts } from '../redux/actions'
import api from '../utils/api'
import { Post, PostT } from '../Components/Post'
import Link from 'next/link'

export default function Posts({ posts }) {
    const postList = useSelector((state: any) => state.posts.posts)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(setPosts(posts))
    }, [])


    return(
        <div>
            <Link href='/new'><a>Add post</a></Link>
            {postList.map((p: PostT) => {
                return (
                    <Post key={p.id} post = {p}/>
                )
            })}
        </div>
    )
}

export async function getStaticProps() {
    const response = await fetch('https://simple-blog-api.crew.red/posts');
    const posts = await response.json();
    return {
      props: {
        posts,
      },
    }
  }