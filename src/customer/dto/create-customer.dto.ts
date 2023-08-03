import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsPhoneNumber, IsEmail, IsStrongPassword } from 'class-validator';

export class CreateCustomerDto {
  @ApiProperty({ example: 'John', description: 'Customer first name' })
  @IsString()
  first_name: string;

  @ApiProperty({ example: 'Green', description: 'Customer last name' })
  @IsString()
  last_name: string;

  @ApiProperty({
    example: '+998997778800',
    description: 'Customer phone number',
  })
  @IsPhoneNumber()
  phone: string;

  @ApiProperty({ example: 'john@gmail.com', description: 'Customer email' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Pa$$w0rd', description: 'Customer password' })
  @IsStrongPassword()
  password: string;

  @ApiProperty({ example: '2002-01-01', description: 'Customer birth date' })
  birth_date: Date;

  @ApiProperty({ example: 0, description: 'Customer gender' })
  gender: number;

  @ApiProperty({ example: 1, description: 'Language id' })
  lang_id: number;
}
