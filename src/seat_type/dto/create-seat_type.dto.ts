import { ApiProperty } from '@nestjs/swagger';

export class CreateVenue_typeDto {
  @ApiProperty({ example: 'Balcon', description: 'Venue type name' })
  name: string;
 
}
