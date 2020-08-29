import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, setPosts } from '../redux/actions'
import api from '../utils/api'

export default function Posts({ posts }) {
    const postList = useSelector((state: any) => state.posts.posts)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(setPosts(posts))
    }, [])

    return(
        <div>
            Posts
            {postList.map(p => {
                return (
                    <div>{p.title}</div>
                )
            })}
        </div>
    )
}

Posts.getInitialProps = () => {   
    const data = api.get('posts').then(response => response.data)
    return {
        posts: data
    }
};