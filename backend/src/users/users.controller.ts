import { CreateUserDto } from './dto/create-user.dto';
import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){

    }

    @Get()
    getAll(): Promise<User[]>{
        return this.usersService.getAll()
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createUserDto: CreateUserDto): Promise<User>{
        return this.usersService.create(createUserDto)
    }
}
