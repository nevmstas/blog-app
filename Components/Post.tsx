import Link from 'next/link'
import styled from 'styled-components'


const PostWrapper = styled.div`
    border: 1px solid black;
    border-radius: 3px;
    padding: 10px;
    margin-bottom: 20px;
`

export type PostT = {
    title: string
    body: string
    id: number
}

type PropsType = {
    post:PostT
}

export const Post = ({ post } : PropsType) =>{
    return (
        <PostWrapper>
            <h2>{post.title}</h2>
            <hr />
            <p>{post.title}</p>
            <Link href={'posts/'+ post.id}><a>Check post</a></Link>
        </PostWrapper>
    )
}