import { ApiProperty } from '@nestjs/swagger';
import { IsPhoneNumber } from 'class-validator';

export class CreateCustomer_cardDto {
  @ApiProperty({
    example: 1,
    description: 'Customer id',
  })
  customer_id: number;

  @ApiProperty({
    example: 'Card name',
    description: 'Customer card name',
  })
  name: string;

  @ApiProperty({
    example: '+998998887766',
    description: 'Customer phone number that was used for opening card',
  })
  @IsPhoneNumber()
  phone: string;

  @ApiProperty({
    example: 1,
    description: 'Number',
  })
  number: string;

  @ApiProperty({
    example: 'Card year',
    description: 'Customer card year',
  })
  year: string;

  @ApiProperty({
    example: 'Card month',
    description: 'Customer card month',
  })
  month: string;

  @ApiProperty({
    example: 'false',
    description: 'Whether customer active or not',
  })
  is_active: boolean;

  @ApiProperty({
    example: 'false',
    description: 'Whether customer main or not',
  })
  is_main: boolean;
}
