import Link from 'next/link'
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
        <div>
            <h2>{post.title}</h2>
            <p>{post.title}</p>
            <Link href={'/'+post.id}>Check post</Link>
        </div>
    )
}