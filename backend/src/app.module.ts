import { PostsModule } from './posts/posts.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from "dotenv";
import { UsersModule } from './users/users.module';

dotenv.config()
const dbuser = process.env.DB_USER
const dbpass = process.env.DB_PASS

@Module({
  imports: [UsersModule, PostsModule, MongooseModule.forRoot(`mongodb+srv://${dbuser}:${dbpass}@cluster0.uq4as.mongodb.net/blogDb?retryWrites=true&w=majority`)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
