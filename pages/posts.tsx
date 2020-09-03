import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPosts } from '../redux/actions'
import api from '../utils/api'
import { Post, PostT } from '../Components/Post'
import Link from 'next/link'

import { getAllPosts } from '../utils/api'

import styled from 'styled-components'

export const ContentWrapper = styled.div`
    max-width: 1060px;
    margin: 0 auto;
`

export default function Posts({ posts }) {
    const postList = useSelector((state: any) => state.posts.posts)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(setPosts(posts))
    }, [])


    return(
        <ContentWrapper>
            <Link href='/new'><a>Add post</a></Link>
            {postList.map((p: PostT) => {
                return (
                    <Post key={p.id} post = {p}/>
                )
            })}
        </ContentWrapper>
    )
}

export async function getStaticProps() {
    const posts = await getAllPosts()
    return {
      props: {
        posts
      }
    }
}