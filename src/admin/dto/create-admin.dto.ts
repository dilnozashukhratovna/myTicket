import { ApiProperty } from '@nestjs/swagger';

export class CreateAdminDto {
  @ApiProperty({ example: 'John', description: 'Admin name' })
  name: string;
  @ApiProperty({ example: 'login', description: 'login' })
  login: string;
  @ApiProperty({ example: 'pa$$w0rd', description: 'Admin password' })
  password: string;
  @ApiProperty({ example: 'true', description: 'Admin is active?' })
  is_active: boolean;
  @ApiProperty({ example: 'false', description: 'Admin is creator?' })
  is_creator: boolean;
}
