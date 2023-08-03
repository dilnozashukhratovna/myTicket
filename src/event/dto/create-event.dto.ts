import { ApiProperty } from '@nestjs/swagger';

export class CreateEventDto {
  @ApiProperty({ example: 'Event name', description: 'Event name' })
  name: string;
  @ApiProperty({ example: 'photo', description: 'Event photo' })
  photo: string;
  @ApiProperty({ example: '2023-01-01', description: 'Event start date' })
  start_date: Date;
  @ApiProperty({ example: '6pm', description: 'Event start time' })
  start_time: string;
  @ApiProperty({ example: '2023-01-01', description: 'Event finish date' })
  finish_date: Date;
  @ApiProperty({ example: '8pm', description: 'Event finish time' })
  finish_time: string;
  @ApiProperty({ example: 'Text', description: 'Event info' })
  info: string;
  @ApiProperty({ example: 1, description: 'Event type id' })
  event_type_id: number;
  @ApiProperty({ example: 1, description: 'Human Category id' })
  human_category_id: number;
  @ApiProperty({ example: 1, description: 'Event vanue id' })
  venue_id: number;
  @ApiProperty({ example: 1, description: 'Event language id' })
  lang_id: number;
  @ApiProperty({ example: '2023-01-01', description: 'Event release date' })
  release_date: Date;
}
