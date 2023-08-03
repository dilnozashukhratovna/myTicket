import { ApiProperty } from '@nestjs/swagger';

export class CreateCartDto {
  @ApiProperty({ example: 1, description: 'Ticket id' })
  ticket_id: number;

  @ApiProperty({ example: 1, description: 'Customer id' })
  customer_id: number;

  @ApiProperty({ example: 1, description: 'Creating date' })
  createdAt: Date;

  @ApiProperty({ example: 1, description: 'Finishing date' })
  fineshedAt: Date;

  @ApiProperty({ example: 1, description: 'Ticket id' })
  status_id: number;
}
