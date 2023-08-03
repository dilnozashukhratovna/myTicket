import { ApiProperty } from '@nestjs/swagger';

export class CreateEvent_typeDto {
  @ApiProperty({ example: "Event", description: 'Event type name.' })
  name: string;
  @ApiProperty({ example: 1, description: 'Parent event type id.' })
  parent_event_type_id: number;
}
