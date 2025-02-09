import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsIn } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'John Doe' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'strongpassword' })
  @IsString()
  password: string;

  @ApiProperty({ example: 'teacher', enum: ['teacher', 'student'] })
  @IsString()
  @IsIn(['teacher', 'student'])
  role: string;
}
