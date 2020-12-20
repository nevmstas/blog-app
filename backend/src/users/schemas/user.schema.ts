import { Post } from './../../posts/schemas/post.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'

export type UserDocument = User & mongoose.Document

@Schema()
export class User{
    @Prop()
    name: string

    @Prop()
    username: string

    @Prop()
    email: string

    @Prop()
    website: string

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post' }] })
    posts: Array<Post>
}

export const UserSchema = SchemaFactory.createForClass(User)