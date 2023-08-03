import { ApiProperty } from '@nestjs/swagger';

export class CreateHuman_categoryDto {
  @ApiProperty({
    example: 'Up to 15',
    description: 'Human category name',
  })
  name: string;

  @ApiProperty({
    example: 10,
    description: 'Human category start age',
  })
  start_age: number;

  @ApiProperty({
    example: 100,
    description: 'Human category finish age',
  })
  finish_age: number;

  @ApiProperty({
    example: 1,
    description: 'Human category gender (0 => male, 1 => female)',
  })
  gender: number;
}
