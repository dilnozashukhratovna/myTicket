import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface Customer_cardAttr {
  customer_id: number;
  name: string;
  phone: string;
  number: string;
  year: string;
  month: string;
  is_active: boolean;
  is_main: boolean;
}

@Table({ tableName: 'customer_card' })
export class Customer_card extends Model<Customer_card, Customer_cardAttr> {
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
    example: 'Card name',
    description: 'Customer card name',
  })
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @ApiProperty({
    example: '+998998887766',
    description: 'Customer phone number that was used for opening card',
  })
  @Column({
    type: DataType.STRING,
  })
  phone: string;

  @ApiProperty({
    example: 1,
    description: 'Number',
  })
  @Column({
    type: DataType.STRING,
  })
  number: string;

  @ApiProperty({
    example: 'Card year',
    description: 'Customer card year',
  })
  @Column({
    type: DataType.STRING,
  })
  year: string;

  @ApiProperty({
    example: 'Card month',
    description: 'Customer card month',
  })
  @Column({
    type: DataType.STRING,
  })
  month: string;

  @ApiProperty({
    example: 'false',
    description: 'Whether customer active or not',
  })
  @Column({
    type: DataType.BOOLEAN,
  })
  is_active: boolean;

  @ApiProperty({
    example: 'false',
    description: 'Whether customer main or not',
  })
  @Column({
    type: DataType.BOOLEAN,
  })
  is_main: boolean;
}
