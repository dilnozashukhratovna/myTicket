import { ApiProperty } from '@nestjs/swagger';

export class CreateVenueDto {
  @ApiProperty({ example: 'Venue', description: 'Venue name' })
  name: string;
  @ApiProperty({ example: 'Main street 56', description: 'Venue address' })
  address: string;
  @ApiProperty({ example: 'London', description: 'Venue location' })
  location: string;
  @ApiProperty({ example: 'venue.com', description: 'Venue site' })
  site: string;
  @ApiProperty({ example: '1234567', description: 'Venue phone' })
  phone: string;
  @ApiProperty({ example: 1, description: 'Venue venue type id' })
  venue_type_id: number;
  @ApiProperty({ example: 'Schema', description: 'Venue schema' })
  schema: string;
  @ApiProperty({ example: 1, description: 'Venue region id' })
  region_id: number;
  @ApiProperty({ example: 1, description: 'Venue district id' })
  district_id: number;
}
