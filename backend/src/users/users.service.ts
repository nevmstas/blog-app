import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose'
import { UserDocument, User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){

    }

    async getAll():Promise<User[]>{
        return this.userModel.find().exec()
    }

    async create(userDto: CreateUserDto): Promise<User>{
        const newUser = new this.userModel(userDto)
        return newUser.save()
    }
}
