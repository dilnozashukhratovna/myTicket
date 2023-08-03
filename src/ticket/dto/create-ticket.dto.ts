import { ApiProperty } from '@nestjs/swagger';

export class CreateTicketDto {
  @ApiProperty({ example: 1, description: 'Ticket event id' })
  event_id: number;
  @ApiProperty({ example: 1, description: 'Ticket seat id' })
  seat_id: number;
  @ApiProperty({ example: 23.000, description: 'Ticket price' })
  price: number;
  @ApiProperty({ example: 0.987, description: 'Ticket serivce fee' })
  service_fee: number;
  @ApiProperty({ example: 1, description: 'Ticket status' })
  status: number;
  @ApiProperty({ example: 1, description: 'Ticket type' })
  ticket_type: number;
}
