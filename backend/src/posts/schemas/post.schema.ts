import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'
import { User } from '../../users/schemas/user.schema'

export type PostDocument = Post & Document

@Schema()
export class Post {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
    user: User

    @Prop()
    title: string

    @Prop()
    body: string
}

export const PostSchema = SchemaFactory.createForClass(Post)