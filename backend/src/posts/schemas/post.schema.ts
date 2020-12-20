import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type PostDocument = Post & Document

@Schema()
export class Post {
    @Prop()
    title: string

    @Prop()
    body: string
    
    @Prop()
    likes: number
}

export const PostSchema = SchemaFactory.createForClass(Post)