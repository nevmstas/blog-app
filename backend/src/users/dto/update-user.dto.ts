import { Post } from './../../posts/schemas/post.schema';
export class UpdateUserDto {
    readonly name: string
    readonly username: string
    readonly email: string
    readonly website: string
    readonly posts: Post[]
}