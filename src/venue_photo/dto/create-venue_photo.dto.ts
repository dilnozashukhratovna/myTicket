import { ApiProperty } from '@nestjs/swagger';

export class CreateVenue_photoDto {
  @ApiProperty({ example: 1, description: 'Venue id' })
  venue_id: number;

  @ApiProperty({ example: 'url', description: 'url link' })
  url: string;
}
