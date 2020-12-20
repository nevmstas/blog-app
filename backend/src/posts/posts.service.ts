import { CreatePostDto } from './dto/create-post.dto';
import { PostDocument } from './schemas/post.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Post } from './schemas/post.schema'
import { Model } from 'mongoose'

@Injectable()
export class PostsService {
    constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>){

    }

    async getAll():Promise<Post[]>{
        return this.postModel.find().exec()
    }

    async findByIdUser(id): Promise<Post>{
        return this.postModel.findById(id)
    }
    
    async create(postDto: CreatePostDto): Promise<Post>{     
        const newPost = new this.postModel(postDto)
        return newPost.save()
    }
}
