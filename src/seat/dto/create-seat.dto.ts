import { ApiProperty } from '@nestjs/swagger';

export class CreateSeatDto {
  @ApiProperty({ example: 1, description: 'Sector' })
  sector: number;
  @ApiProperty({ example: 1, description: 'Row number' })
  row_number: number;
  @ApiProperty({ example: 1, description: 'Number' })
  number: number;
  @ApiProperty({ example: 1, description: 'Venue id' })
  venue_id: number;
  @ApiProperty({ example: 1, description: 'Seat type id' })
  seat_type_id: number;
  @ApiProperty({ example: "Location", description: 'Location in schema' })
  location_in_schema: string;
 
}
