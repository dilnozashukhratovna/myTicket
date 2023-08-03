import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomer_addressDto {
  @ApiProperty({
    example: 1,
    description: 'Customer id',
  })
  customer_id: number;

  @ApiProperty({
    example: 'Address name',
    description: 'Customer address name',
  })
  name: string;

  @ApiProperty({
    example: 1,
    description: 'Customer country',
  })
  country_id: number;

  @ApiProperty({
    example: 1,
    description: 'Customer region',
  })
  region_id: number;

  @ApiProperty({
    example: 1,
    description: 'Customer district',
  })
  district_id: number;

  @ApiProperty({
    example: 'Street name',
    description: 'Customer street',
  })
  street: string;
  
  @ApiProperty({
    example: 'House address',
    description: 'Customer house address',
  })
  house: string;

  @ApiProperty({
    example: 'Flat address',
    description: 'Customer flat address',
  })
  flat: number;

  @ApiProperty({
    example: 'Location',
    description: 'Customer location',
  })
  location: string;

  @ApiProperty({
    example: 'Post index',
    description: 'Customer post index',
  })
  post_index: string;

  @ApiProperty({
    example: 'Info',
    description: 'Other extra infos about customer',
  })
  info: string;
}
