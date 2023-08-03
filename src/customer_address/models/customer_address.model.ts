import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface Customer_addressAttr {
  customer_id: number;
  name: string;
  country_id: number;
  region_id: number;
  district_id: number;
  street: string;
  house: string;
  flat: number;
  location: string;
  post_index: string;
  info: string;
}

@Table({ tableName: 'customer_address' })
export class Customer_address extends Model<
  Customer_address,
  Customer_addressAttr
> {
  @ApiProperty({ example: 1, description: 'Unikal Id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 1,
    description: 'Customer id',
  })
  @Column({
    type: DataType.INTEGER,
  })
  customer_id: number;

  @ApiProperty({
    example: 'Address name',
    description: 'Customer address name',
  })
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @ApiProperty({
    example: 1,
    description: 'Customer country',
  })
  @Column({
    type: DataType.INTEGER,
  })
  country_id: number;

  @ApiProperty({
    example: 1,
    description: 'Customer region',
  })
  @Column({
    type: DataType.INTEGER,
  })
  region_id: number;

  @ApiProperty({
    example: 1,
    description: 'Customer district',
  })
  @Column({
    type: DataType.INTEGER,
  })
  district_id: number;

  @ApiProperty({
    example: 'Street name',
    description: 'Customer street',
  })
  @Column({
    type: DataType.STRING,
  })
  street: string;

  @ApiProperty({
    example: 'House address',
    description: 'Customer house address',
  })
  @Column({
    type: DataType.STRING,
  })
  house: string;

  @ApiProperty({
    example: 'Flat address => 123',
    description: 'Customer flat address',
  })
  @Column({
    type: DataType.INTEGER,
  })
  flat: number;

  @ApiProperty({
    example: 'Location',
    description: 'Customer location',
  })
  @Column({
    type: DataType.STRING,
  })
  location: string;

  @ApiProperty({
    example: 'Post index',
    description: 'Customer post index',
  })
  @Column({
    type: DataType.STRING,
  })
  post_index: string;

  @ApiProperty({
    example: 'Info',
    description: 'Other extra infos about customer',
  })
  @Column({
    type: DataType.STRING,
  })
  info: string;
}
