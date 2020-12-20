import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';
import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import * as postSchema from './schemas/post.schema';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService){

    }

    @Get()
    getAll(): Promise<postSchema.Post[]>{
        return this.postsService.getAll()
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createPostDto: CreatePostDto): Promise<postSchema.Post>{
        return this.postsService.create(createPostDto)
    }
}
