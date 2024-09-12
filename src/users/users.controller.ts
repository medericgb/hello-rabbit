import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: any) {
    return await this.usersService.createUser(createUserDto);
  }

  @Put(':id')
  async updateUser(@Param('id') userId: number, @Body() updateUserDto: any) {
    return await this.usersService.updateUser(userId, updateUserDto);
  }
}
