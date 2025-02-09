import { Controller, Post, Get, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { User } from './user.schema';
import { UserService } from './users.service';
import { CreateUserDto } from './dto/create-users.dto';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  @ApiOperation({ summary: 'Create a new user' })
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDto);
  }

  @Get('all')
  @ApiOperation({ summary: 'Get all users' })
  async getAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }
}
