import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { UsersService } from './users.service';
  import { Users } from '../users';
  import { User } from '../user';
  
  @Controller('users')
  export class UsersController {
    constructor(private readonly usersService: UsersService) {}
  
    @Get()
    async findAll(): Promise<Users> {
      return this.usersService.findAll();
    }
  
    @Get(':id')
    async find(@Param('id') id: number): Promise<User> {
      return this.usersService.find(id);
    }
  
    @Post()
    async create(@Body('user') user: User): Promise<void> {
      this.usersService.create(user);
    }
  
    @Put()
    async update(@Body('user') user: User): Promise<void> {
      this.usersService.update(user);
    }
  }