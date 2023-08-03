import { ApiProperty } from '@nestjs/swagger';

export class CreateBookingDto {
  @ApiProperty({ example: 1, description: 'Cart id' })
  cart_id: number;
  @ApiProperty({ example: '01-01-2023', description: 'Creating date' })
  createdAt: Date;
  @ApiProperty({ example: '01-02-2023', description: 'Finishing date' })
  fineshedAt: Date;
  @ApiProperty({ example: 1, description: 'Payment method id' })
  payment_method_id: number;
  @ApiProperty({ example: 1, description: 'Delivery method id' })
  delivery_method_id: number;
  @ApiProperty({ example: 1, description: 'Discount coupon id' })
  discount_coupon_id: number;
  @ApiProperty({ example: 1, description: 'Status id' })
  status_id: number;
}
